// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      keyframes: {
        'from-back': {
          '0%': {
            transform: 'scale(0.5) translateZ(-1000px)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1) translateZ(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'from-back': 'from-back 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
