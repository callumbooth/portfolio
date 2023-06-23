import compareAsc from 'date-fns/compareAsc';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

import { readFile, readdir } from 'fs/promises';

import { BlogArticleFrontmatter, WorkArticleFrontmatter } from './types';

export const getMarkdownContents = async <T extends 'work' | 'blog'>(
    section: T,
    slug: string,
) => {
    const filePath = path.join(
        process.cwd(),
        'src',
        'data',
        section,
        slug + '.mdx',
    );

    const source = await readFile(filePath);

    const contents = await compileMDX<
        T extends 'work' ? WorkArticleFrontmatter : BlogArticleFrontmatter
    >({
        source,
        options: { parseFrontmatter: true },
        components: {
            h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-4xl'>{children}</h2>,
        },
    });
    return {
        key: slug,
        ...contents,
    };
};

export const getMarkdownFilesByDate = async <T extends 'work' | 'blog'>(
    section: T,
) => {
    const folderPath = path.join(process.cwd(), 'src', 'data', section);

    const files = await readdir(folderPath);

    const res = await Promise.allSettled(
        files.map(async (file) => {
            return getMarkdownContents(section, file.split('.')[0]);
        }),
    );

    res.sort((a, b) => {
        return (
            (a.status === 'fulfilled' &&
                b.status === 'fulfilled' &&
                compareAsc(
                    a.value.frontmatter.createdDate,
                    b.value.frontmatter.createdDate,
                )) ||
            -1
        );
    });

    return res;
};
