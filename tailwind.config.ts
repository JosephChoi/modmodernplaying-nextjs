import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        royalPurple: '#5A3DAA',
        mutedSage: '#4A5D4E',
        lavenderMist: '#F5F3FF',
        warmStone: '#F9F8F4',
        darkPurple: '#1A1A1A',
        brandRed: '#E11D48',
        classicGold: '#C5A059',
        champagne: '#F3E5AB',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #F3E5AB 50%, #C5A059 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #1A1A1A, #0f0f0f)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

