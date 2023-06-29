import React from 'react';

import Link from '@/components/atoms/Link';

const Header = () => {
    return (
        <div className='self-start flex-initial'>
            <Link href='/'>
                <a className='text-gray-600'>
                    <h1 className='text-xl font-light'>Callum Booth</h1>
                    <h2 className='text-base font-semibold'>
                        Front-end Web Developer
                    </h2>
                </a>
            </Link>
        </div>
    );
};

export default Header;
