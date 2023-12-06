import format from 'date-fns/format';
import Image from 'next/image';

import { getMarkdownContents } from '~/lib/markdown';
import { hexToRGB } from '~/lib/utils';

const WorkPage = async ({ params }: { params: { slug: string } }) => {
    const contents = await getMarkdownContents('blog', params.slug);

    return (
        <main className='flex flex-col'>
            <div className='pb-8'>
                <h1 className='font-medium text-4xl pb-2 text-primary-main'>
                    {contents.frontmatter.title}
                </h1>
                <span>
                    {format(contents.frontmatter.createdDate, 'MMMM do, yyyy')}{' '}
                    &mdash; {contents.readTime.text}
                </span>
            </div>
            <div className=' w-full h-32 relative mb-8'>
                <Image
                    src={contents.frontmatter.imageUrl}
                    fill
                    sizes='100vw'
                    alt=''
                    className='border rounded overflow-hidden'
                    style={{
                        borderColor: hexToRGB(
                            contents.frontmatter.highlightColor,
                            0.1,
                        ),
                        backgroundColor: contents.frontmatter.highlightColor,
                        objectFit: 'contain',
                    }}
                />
            </div>
            {contents.content}
        </main>
    );
};

export default WorkPage;
