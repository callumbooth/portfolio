import fs from 'fs';

import { getMarkdownContents } from '~/lib/markdown';

const WorkPage = async ({ params }: { params: { slug: string } }) => {
    const contents = await getMarkdownContents('work', params.slug);

    return <main className='flex flex-col'>{contents.content}</main>;
};

export default WorkPage;
