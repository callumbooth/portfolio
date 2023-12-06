import Link from 'next/link';

import { myEmailAddress } from '~/lib/constants';

export default function Contact() {
    return (
        <div>
            <h1 className='text-2xl pb-7'>Get in touch</h1>

            <p className='text-lg pb-16'>
                Thanks for taking a look at my portfolio, if you would like to
                get in touch just send me a quick email.
            </p>

            <div className='font-bold'>
                <span className='text-primary-main font-normal'>e:</span>{' '}
                <Link href={`mailto:${myEmailAddress}`}>{myEmailAddress}</Link>
            </div>
        </div>
    );
}
