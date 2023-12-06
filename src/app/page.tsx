import { differenceInYears } from 'date-fns';
import format from 'date-fns/format';
import Image from 'next/image';

import { HighlightCard } from '~/components/HighlightCard';
import BlogImage from '~/components/blogImg';
import { ArticleType, ArticleTypes, getLatestArticles } from '~/lib/markdown';
import { BlogArticleFrontmatter } from '~/lib/types';
import { hexToRGB, randomIntFromInterval } from '~/lib/utils';
import Link from '~/old/components/atoms/Link';

export default async function Home() {
    const latestArticles = await getLatestArticles();

    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl pb-7'>
                Hi, I’m Callum, a software engineer specialising in frontend
                development
            </h1>
            <div className='grid text-lg pb-7 grid-cols-1 mb-32 lg:grid-cols-2 lg:gap-4'>
                <p>
                    After {differenceInYears(Date.now(), new Date('2016'))}{' '}
                    years working in software engineering, I help build highly
                    interactive user interfaces that scale. I&apos;ve lead teams
                    in both scrum and shape up in recent years to deliver value
                    at speed.
                </p>
                <p className='lg:pt-0'>
                    In my personal life, I&apos;m an eclectic person, I enjoy
                    doing the mainsteam and the niche (geeky). From playing D&D
                    with a group of friends to spending time with family and
                    days out with my other &quot;better&quot; half and daughter.
                </p>
            </div>

            <div className='mb-32'>
                <h2 className='text-2xl pb-8'>Stats</h2>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                    <div>
                        <HighlightCard title='React'>
                            <span className='text-2xl lg:text-5xl'>
                                {differenceInYears(
                                    Date.now(),
                                    new Date('2017'),
                                )}{' '}
                                years
                            </span>
                        </HighlightCard>
                    </div>
                    <div>
                        <HighlightCard title='React Native'>
                            <span className='text-2xl lg:text-5xl'>
                                {differenceInYears(
                                    Date.now(),
                                    new Date('2021'),
                                )}{' '}
                                years
                            </span>
                        </HighlightCard>
                    </div>
                    <div>
                        <HighlightCard title='Node'>
                            <span className='text-2xl lg:text-5xl'>
                                {differenceInYears(
                                    Date.now(),
                                    new Date('2019'),
                                )}{' '}
                                years
                            </span>
                        </HighlightCard>
                    </div>
                    <div>
                        <HighlightCard title='Typescript'>
                            <span className='text-2xl lg:text-5xl'>
                                {differenceInYears(
                                    Date.now(),
                                    new Date('2019'),
                                )}{' '}
                                years
                            </span>
                        </HighlightCard>
                    </div>
                    <div className='md:col-span-2'>
                        <HighlightCard title='Tech'>
                            <span className='text-base'>
                                React / React Native / Typescript / Node / Jest
                                / Cypress / React Query / REST / GraphQL / Remix
                                / NextJS / R3F / ThreeJS
                            </span>
                        </HighlightCard>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-2xl pb-8'>Latest Entries</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6'>
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
                                    <div
                                        className='relative w-full border rounded overflow-hidden aspect-square [&>div]:hover:opacity-0 [&>img]:hover:scale-100'
                                        style={{
                                            borderColor: hexToRGB(
                                                article.value.frontmatter
                                                    .highlightColor,
                                                1,
                                            ),
                                            background:
                                                article.value.frontmatter
                                                    .highlightColor,
                                        }}
                                    >
                                        <Image
                                            src={
                                                article.value.frontmatter
                                                    .imageUrl
                                            }
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            alt=''
                                            className=' scale-95 transition-transform will-change-transform duration-500'
                                        />
                                        <div
                                            className='absolute inset-0 opacity-100 transition-opacity duration-300 bg-white'
                                            style={{
                                                background:
                                                    article.value.frontmatter
                                                        .highlightColor,
                                            }}
                                        />
                                    </div>
                                    <div className='flex justify-between pt-2'>
                                        <span className='text-gray-600'>
                                            {format(
                                                article.value.frontmatter
                                                    .createdDate,
                                                'dd.MM.yyyy',
                                            )}
                                        </span>

                                        <div>{article.value.readTime.text}</div>
                                    </div>
                                    <h2 className='text-lg'>
                                        {article.value.frontmatter.title}
                                    </h2>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
