import clsx from 'clsx';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import GithubIcon from '~/components/icons/github';
import TwitterIcon from '~/components/icons/twitter';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata = {
    title: 'Callum Booth - Software Engineer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={clsx(
                    montserrat.className,
                    'flex flex-wrap flex-col h-auto sm:h-full sm:flex-row',
                )}
            >
                <header className='flex-none w-full sm:w-[320px] flex flex-col justify-between px-8 sm:px-12 py-8 bg-white overflow-y-auto'>
                    <div className='flex flex-col'>
                        <span className='text-primary-main font-bold text-[62px] leading-[0.75] pb-4'>
                            Callum <br />
                            <span className='text-primary-main/50'>Booth</span>
                        </span>
                        <div className='text-2xl pb-4'>Software Engineer</div>
                        <div className='text-sm pb-4'>
                            <span className='text-primary-main'>e:</span>{' '}
                            <a
                                className='font-bold hover:text-primary-main'
                                href='mailto:callum-booth@live.co.uk'
                            >
                                callum-booth@live.co.uk
                            </a>
                        </div>
                        <div className='flex gap-5 text-xl'>
                            <a
                                className='hover:fill-primary-main'
                                href='https://twitter.com/showerg3l'
                                target='_blank'
                            >
                                <TwitterIcon />
                            </a>
                            <a
                                className='hover:fill-primary-main'
                                href='https://github.com/callumbooth'
                                target='_blank'
                            >
                                <GithubIcon />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col text-xl mt-8'>
                        <div>
                            <Link
                                className='strike-through font-light mb-2'
                                href='/'
                            >
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link
                                className='strike-through font-light mb-2'
                                href='/blog'
                            >
                                Blog
                            </Link>
                        </div>
                        <div>
                            <Link
                                className='strike-through font-light'
                                href='/contact'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </header>
                <main className='flex-1 w-full sm:w-[calc(100%-320px)] relative bg-white overflow-y-hidden h-full'>
                    <div className='absolute inset-0 h-screen z-0 bg-gradient-to-b from-gray-50 to-80% to-white' />
                    <div className='bg-gray-50 sm:bg-transparent relative overflow-y-auto h-full p-8 md:p-12 lg:p-24'>
                        <div className='max-w-screen-xl'>{children}</div>
                    </div>
                </main>
            </body>
        </html>
    );
}
