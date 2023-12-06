import React from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';

const lines = [
    {
        id: 1,
        x: 435,
        y: 435,
        translate: {
            x: 1090,
            y: 0,
        },
        rotate: true,
    },
    {
        id: 2,
        x: 369,
        y: 369,
        translate: {
            x: 417,
            y: 0,
        },
        rotate: true,
    },
];

interface ISliderTopSVGProps extends React.SVGProps<SVGSVGElement> {
    rotation: number;
    show: boolean;
}

const animateIn = {
    hidden: {
        strokeDashoffset: 100,
    },
    visible: {
        strokeDashoffset: 0,
        transition: {
            delay: 1.1,
        },
    },
};

const SliderTopSVG = ({ rotation, show, ...props }: ISliderTopSVGProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1520 1080'
            {...props}
        >
            <g>
                {lines.map((line, i) => {
                    let transform;
                    if (line.rotate) {
                        transform =
                            'translate(' +
                            line.translate.x +
                            ' ' +
                            line.translate.y +
                            ') rotate(' +
                            rotation +
                            ' ' +
                            line.x / 2 +
                            ' ' +
                            line.y / 2 +
                            ')';
                    } else {
                        transform =
                            'translate(' +
                            line.translate.x +
                            ' ' +
                            line.translate.y +
                            ')';
                    }
                    return (
                        <motion.line
                            key={i}
                            className={clsx(
                                'stroke-current text-primary-main stroke-3',
                            )}
                            variants={animateIn}
                            initial='hidden'
                            animate={show ? 'visible' : 'hidden'}
                            pathLength='100'
                            strokeDasharray='100'
                            transition={{ duration: 0.5 }}
                            fill='none'
                            x2={line.x}
                            y2={line.y}
                            transform={transform}
                        />
                    );
                })}
            </g>
        </svg>
    );
};
export default SliderTopSVG;
