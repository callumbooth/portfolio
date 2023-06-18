import Image from 'next/image';

export default function Home() {
    return (
        <div className='flex min-h-screen flex-col p-24 h-[2000px]'>
            <h1>
                Hi, I’m Callum, a software engineer specialising in frontend
                development
            </h1>
            <div className='flex'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                </p>
            </div>
            <div>
                <span>tech:</span>{' '}
                <span>React / React Native Jest / Cypress React Query</span>
                <span>Typescript NextJs / Remix / Node REST / GraphQL</span>
            </div>
            <div>
                <span>Xp:</span>{' '}
                <span>6 years - React 2 years - React Native</span>
                <span>4 years - Node 4 years - Typescript</span>
                <span>8 years - Total</span>
            </div>

            <div>
                <h2>Latest Articles</h2>
                <div>
                    <div>article 1</div>
                    <div>article 2</div>
                    <div>article 3</div>
                </div>
            </div>
        </div>
    );
}
