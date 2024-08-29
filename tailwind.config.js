/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/images/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        Secondary: '#009EFE',
        Philippine_Yellow: '#FFC800',
        Sunglow: '#fcd130',
        Cultured: '#F4F4F4',
        Silver_Sand: '#C4C4C4',
        Pale_Pink: '#FCD4D4'
      },
      boxShadow: {
        shadow_1: '0px 6px 36px 0px rgba(0, 0, 0, 0.10);',
        shadow_2: '0px 2.999px 17.992px 0px rgba(0, 0, 0, 0.10);'
      }
    }
  },
  plugins: []
};
