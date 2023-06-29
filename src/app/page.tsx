import format from 'date-fns/format';
import Image from 'next/image';

import BlogImage from '~/components/blogImg';
import { ArticleType, ArticleTypes, getLatestArticles } from '~/lib/markdown';
import { BlogArticleFrontmatter, WorkArticleFrontmatter } from '~/lib/types';
import Link from '~/old/components/atoms/Link';

const isBlogArticle = (x: any, y: ArticleType): x is BlogArticleFrontmatter =>
    y === ArticleTypes.Blog;

export default async function Home() {
    const latestArticles = await getLatestArticles();

    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl pb-7'>
                Hi, I’m Callum, a software engineer specialising in frontend
                development
            </h1>
            <div className='block text-lg pb-7 lg:flex lg:gap-2'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                </p>
                <p className='lg:pt-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                </p>
            </div>
            <div className='flex pb-6'>
                <div className='flex-none w-14'>
                    <span className='text-primary-main'>Tech:</span>
                </div>
                <div className='flex flex-initial w-2/3'>
                    <span className='flex-1 w-1/2'>
                        React / React Native
                        <br />
                        Jest / Cypress
                        <br /> React Query
                    </span>
                    <span className='flex-1 w-1/2'>
                        Typescript
                        <br /> NextJs / Remix / Node
                        <br /> REST / GraphQL
                    </span>
                </div>
            </div>
            <div className='flex'>
                <div className='flex-none w-14'>
                    <span className='text-primary-main'>Xp:</span>
                </div>
                <div className='flex flex-initial w-2/3 flex-wrap'>
                    <span className='flex-auto w-1/2'>
                        6 years - React
                        <br />2 years - React Native
                    </span>
                    <span className='flex-auto w-1/2'>
                        4 years - Node
                        <br />4 years - Typescript
                    </span>
                    <span className='flex-auto w-full'>8 years - Total</span>
                </div>
            </div>

            <div className='mt-20'>
                <h2 className='text-2xl'>Latest Articles</h2>
                <div className='grid grid-cols-3 gap-6'>
                    {latestArticles.map((article) => {
                        if (article.status !== 'fulfilled') {
                            return null;
                        }

                        return (
                            <Link
                                key={`${article.value.type}-${article.value.slug}`}
                                href={`/${article.value.type}/${article.value.slug}`}
                            >
                                <article>
                                    <BlogImage rotation={0} />
                                    <div className='flex justify-between'>
                                        <div>
                                            {format(
                                                article.value.frontmatter
                                                    .createdDate,
                                                'dd/MM/yy',
                                            )}
                                        </div>

                                        {isBlogArticle(
                                            article.value.frontmatter,
                                            article.value.type,
                                        ) && (
                                            <div>
                                                {
                                                    article.value.frontmatter
                                                        .timeToRead
                                                }{' '}
                                                mins
                                            </div>
                                        )}
                                    </div>
                                    <h2>{article.value.frontmatter.title}</h2>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
