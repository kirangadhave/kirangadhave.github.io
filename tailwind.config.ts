import type { Config } from 'tailwindcss';

// Light Mode Colors
// https://huemint.com/website-2/#palette=#e3e5e7-#2b292b-1fade4-e90053

// Dark Mode Colors
// https://huemint.com/website-2/#palette=182f42-fcfbfd-1fade4-e90053
// https://huemint.com/website-2/#palette=2b292b-e3e5e7-1fade4-e90053

/** To Use
 *
 * Light:
 * https://huemint.com/website-2/#palette=#e3e5e7-#2b292b-#1fade4-#e90053
 *
 * Dark:
 * https://huemint.com/website-2/#palette=#2b292b-#e3e5e7-#1fade4-#e90053
 *
 **/

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
export default config;
