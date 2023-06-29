import colors from 'tailwindcss/colors';

import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/lib/markdown.tsx',
    ],
    theme: {
        container: {
            center: true
        },
        fontFamily: {
            base: ['var(--font-montserrat'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            primary: {
                900: 'rgba(49, 7, 7, 1)',
                main: 'rgba(93, 14, 14, 1)',
                500: 'rgba(93, 14, 14, 0.5)',
                200: 'rgba(93, 14, 14, 0.2)',
            },
        },
        extend: {
            animation: {
                fadeIn: 'fadeIn 0.5s ease',
            },
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
} satisfies Config;
