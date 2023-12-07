import Image from 'next/image';
import Link from 'next/link';

import { getMarkdownFilesByDate } from '~/lib/markdown';
import { hexToRGB } from '~/lib/utils';

export default async function Home() {
    const files = await getMarkdownFilesByDate('blog');

    return (
        <main className='flex flex-col'>
            <h1 className='text-2xl pb-7'>
                My latest ideas, projects and findings, both personal and
                professional
            </h1>
            <div className='block text-lg pb-12 lg:flex lg:gap-2 w-full lg:w-1/2'>
                <p>
                    A collection of things, from tech write ups and half
                    finished investigations to random shower thoughts. Some are
                    related to my professional career others, peronal, whatever
                    the case, I&apos;ll keep adding more as time permits.
                </p>
            </div>

            <div className='flex flex-wrap -mx-2'>
                {files.map((file) => {
                    if (file.status !== 'fulfilled') {
                        return null;
                    }

                    return (
                        <article
                            key={file.value.frontmatter.title}
                            className='flex-initial w-full lg:w-1/2 px-2 pb-10'
                        >
                            <Link href={`/blog/${file.value.slug}`}>
                                <Image
                                    src={file.value.frontmatter.imageUrl}
                                    width={464}
                                    height={155}
                                    alt=''
                                    className='border rounded overflow-hidden'
                                    style={{
                                        borderColor: hexToRGB(
                                            file.value.frontmatter
                                                .highlightColor,
                                            0.1,
                                        ),
                                    }}
                                />
                                <h2 className='pt-6 text-2xl'>
                                    {file.value.frontmatter.title}
                                </h2>

                                <p className='py-3 text-lg'>
                                    {file.value.frontmatter.blurb}
                                </p>

                                <div className='flex gap-1'>
                                    {file.value.frontmatter.tags.map(
                                        (tag, i) => {
                                            const last =
                                                i ===
                                                file.value.frontmatter.tags
                                                    .length -
                                                    1;
                                            return (
                                                <>
                                                    <span key={tag}>{tag}</span>{' '}
                                                    {!last && <div>.</div>}
                                                </>
                                            );
                                        },
                                    )}
                                </div>
                            </Link>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}
