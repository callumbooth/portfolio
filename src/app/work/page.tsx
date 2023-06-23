import Image from 'next/image';

import { getMarkdownFilesByDate } from '~/lib/markdown';

export default async function Home() {
    const files = await getMarkdownFilesByDate('work');

    return (
        <main className='flex flex-col'>
            <h1 className='text-2xl pb-7'>
                My latest work, both personal and professional
            </h1>
            <div className='block text-lg pb-7 lg:flex lg:gap-2 w-1/2'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
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
                            className='flex-auto w-1/2 px-2 pb-10'
                        >
                            <Image
                                src={file.value.frontmatter.imageUrl}
                                width={464}
                                height={155}
                                alt=''
                                className='border rounded overflow-hidden'
                                style={{
                                    borderColor:
                                        file.value.frontmatter.highlightColor,
                                }}
                            />
                            <h2 className='pt-6 text-2xl'>
                                {file.value.frontmatter.title}
                            </h2>

                            <p className='py-3 text-lg'>
                                {file.value.frontmatter.blurb}
                            </p>

                            <div className='flex gap-1'>
                                {file.value.frontmatter.tags.map((tag, i) => {
                                    const last =
                                        i ===
                                        file.value.frontmatter.tags.length - 1;
                                    return (
                                        <>
                                            <span key={tag}>{tag}</span>{' '}
                                            {!last && <div>.</div>}
                                        </>
                                    );
                                })}
                            </div>
                        </article>
                    );
                })}
            </div>
        </main>
    );
}
