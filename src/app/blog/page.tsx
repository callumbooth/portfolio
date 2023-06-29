import format from 'date-fns/format';
import Image from 'next/image';

import BlogImage from '~/components/blogImg';
import { getMarkdownFilesByDate } from '~/lib/markdown';

export default async function Blog() {
    const files = await getMarkdownFilesByDate('blog');

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

            <div className='grid grid-cols-3 gap-6'>
                {files.map((file) => {
                    if (file.status !== 'fulfilled') {
                        return null;
                    }

                    return (
                        <article
                            key={file.value.frontmatter.title}
                            className='pb-10'
                        >
                            <BlogImage
                                rotation={file.value.frontmatter.rotation}
                            />

                            <div className='flex justify-between'>
                                <span>
                                    {format(
                                        file.value.frontmatter.createdDate,
                                        'dd/MM/yyy',
                                    )}
                                </span>
                                <span>
                                    {file.value.frontmatter.timeToRead} mins
                                </span>
                            </div>
                            <h2 className='pt-6 pb-3 text-2xl'>
                                {file.value.frontmatter.title}
                            </h2>

                            {/* <p className='py-3 text-lg'>
                                {file.value.frontmatter.blurb}
                            </p> */}

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
