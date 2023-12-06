import compareAsc from 'date-fns/compareAsc';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import readingTime from 'reading-time';

import { readFile, readdir } from 'fs/promises';

import { BlogArticleFrontmatter } from './types';

export const ArticleTypes = {
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

    const time = readingTime(source as unknown as string);

    const contents = await compileMDX<BlogArticleFrontmatter>({
        source,
        options: { parseFrontmatter: true, scope: { type: section } },
        components: {
            h2: ({ children }) => (
                <h2 className='text-2xl pt-12 pb-4'>{children}</h2>
            ),
        },
    });

    return {
        slug: encodeURIComponent(slug),
        type: section,
        readTime: time,
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

    return res.filter((file) => {
        return (
            file.status === 'fulfilled' &&
            file.value.frontmatter.status === 'live'
        );
    });
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

export const getMarkdownFilesByDate = async <T extends 'blog'>(section: T) => {
    const files = await getMarkdownFiles(section);
    return sortMarkdownFilesByDate<T>(files);
};

export const getLatestArticles = async (
    from = 0,
    limit = 3,
    orderBy: 'asc' | 'desc' = 'asc',
) => {
    const blogFiles = await getMarkdownFiles('blog');

    const sorted = sortMarkdownFilesByDate(blogFiles);

    if (orderBy === 'asc') {
        sorted.reverse();
    }

    return sorted.slice(from, limit);
};
