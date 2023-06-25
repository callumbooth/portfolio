import * as React from 'react';
import { SVGProps } from 'react';

const BlogImage = ({
    rotation,
    ...props
}: { rotation: number } & SVGProps<SVGSVGElement>) => (
    <svg
        // width='100%'
        // height='100%'
        viewBox='0 0 298 343'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width='100%' height='342' rx='4' fill='red' />
        <mask
            id='mask0_16_443'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='298'
            height='343'
        >
            <rect width='298' height='343' rx='4' fill='#D9D9D9' />
        </mask>
        <g
            mask='url(#mask0_16_443)'
            style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: 'center',
            }}
        >
            <line
                x1='58.3536'
                y1='-9.35355'
                x2='169.354'
                y2='101.646'
                stroke='#5D0E0E'
            />
            <line
                x1='240.359'
                y1='-9.34751'
                x2='298.359'
                y2='50.6525'
                stroke='#5D0E0E'
            />
            <line
                x1='300.653'
                y1='357.36'
                x2='222.653'
                y2='282.36'
                stroke='#5D0E0E'
            />
            <line
                x1='301.64'
                y1='286.347'
                x2='248.64'
                y2='231.347'
                stroke='#5D0E0E'
            />
            <line
                y1='-0.5'
                x2='288.044'
                y2='-0.5'
                transform='matrix(-0.705986 -0.708226 0.716399 -0.697691 199.308 346)'
                stroke='#5D0E0E'
            />
            <line
                y1='-0.5'
                x2='206.963'
                y2='-0.5'
                transform='matrix(-0.703927 -0.710272 0.71842 -0.69561 140.628 346)'
                stroke='#5D0E0E'
            />
            <path
                d='M-4.8418 142.762L198.389 345.993L140.874 345.993L-4.8418 199.611L-4.8418 142.762Z'
                fill='#D9D9D9'
            />
        </g>
    </svg>
);
export default BlogImage;
