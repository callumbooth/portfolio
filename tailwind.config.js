import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            base: ['proxima-nova', 'Arial', 'Helvetica', 'Sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: defaultTheme.colors.black,
            white: defaultTheme.colors.white,
            background: '#efefef',
            gray: defaultTheme.colors.trueGray,
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
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
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
};
