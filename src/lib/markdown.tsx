import compareAsc from 'date-fns/compareAsc';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

import { readFile, readdir } from 'fs/promises';

import { BlogArticleFrontmatter, WorkArticleFrontmatter } from './types';

export const ArticleTypes = {
    Work: 'work',
    Blog: 'blog',
} as const;

export type ArticleType = (typeof ArticleTypes)[keyof typeof ArticleTypes];

const rootDataFolder = path.join(process.cwd(), 'src', 'data');

export const getMarkdownContents = async <T extends ArticleType>(
    section: T,
    slug: string,
) => {
    const filePath = path.join(rootDataFolder, section, slug + '.mdx');

    const source = await readFile(filePath);

    const contents = await compileMDX<
        T extends 'work' ? WorkArticleFrontmatter : BlogArticleFrontmatter
    >({
        source,
        options: { parseFrontmatter: true, scope: { type: section } },
        components: {
            h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-4xl'>{children}</h2>,
        },
    });
    return {
        slug: encodeURIComponent(slug),
        type: section,
        ...contents,
    };
};

export const getMarkdownFiles = async <T extends ArticleType>(folder: T) => {
    const folderPath = path.join(rootDataFolder, folder);

    const files = await readdir(folderPath);

    const res = await Promise.allSettled(
        files.map(async (file) => {
            return getMarkdownContents(folder, file.split('.')[0]);
        }),
    );

    return res;
};

export const sortMarkdownFilesByDate = <T extends ArticleType>(
    files: PromiseSettledResult<
        Awaited<ReturnType<typeof getMarkdownContents<T>>>
    >[],
) => {
    files.sort((a, b) => {
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

    return files;
};

export const getMarkdownFilesByDate = async <T extends 'work' | 'blog'>(
    section: T,
) => {
    const files = await getMarkdownFiles(section);
    return sortMarkdownFilesByDate<T>(files);
};

export const getLatestArticles = async (
    from = 0,
    limit = 3,
    orderBy: 'asc' | 'desc' = 'asc',
) => {
    const blogFiles = await getMarkdownFiles('blog');
    const workFiles = await getMarkdownFiles('work');

    const sorted = sortMarkdownFilesByDate([...blogFiles, ...workFiles]);

    if (orderBy === 'asc') {
        sorted.reverse();
    }

    return sorted.slice(from, limit);
};
