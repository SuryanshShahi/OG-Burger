import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        secondary: 'rgba(55, 65, 81, 1)',
        primary: '#EB1C24',
      },
      boxShadow: {
        cardShadow:
          '0px 0px 0px 0px rgba(0, 0, 0, 0.02), 0px 7px 15px 0px rgba(0, 0, 0, 0.02), 0px 27px 27px 0px rgba(0, 0, 0, 0.02), 0px 60px 36px 0px rgba(0, 0, 0, 0.01), 0px 107px 43px 0px rgba(0, 0, 0, 0.00), 0px 167px 47px 0px rgba(0, 0, 0, 0.00);',
      },
    },
    fontFamily: {
      BebasNeue: 'BebasNeue',
      hyberBlaster: 'hyberBlaster',
      saint: 'saint',
    },
  },
  plugins: [],
};
export default config;
