import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

import { readFile } from 'fs/promises';

export const getMarkdownContents = async (
    section: 'work' | 'blog',
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
    return compileMDX<{ title: string }>({
        source,
        options: { parseFrontmatter: true },
        components: {
            h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-4xl'>{children}</h2>,
        },
    });
};
