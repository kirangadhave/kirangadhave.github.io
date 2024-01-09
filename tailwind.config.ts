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
      typography: () => ({
        thm: {
          css: {
          '--tw-prose-body': "#2b292b",
          '--tw-prose-headings': "#2b292b",
          '--tw-prose-links': "#e90053",
          '--tw-prose-invert-body': "#e3e5e7",
          '--tw-prose-invert-headings': "#e3e5e7",
          '--tw-prose-invert-links': "#1fade4",
        }
        },
      }),
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blk: "#2b292b",
        wht: "#e3e5e7"
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
