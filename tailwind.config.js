/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'space-dark': '#060918',
        'glass-purple': 'rgba(123, 97, 255, 0.05)',
        'neon-green': '#00ffa3',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'dark-purple': '#1a0b2e',
        'purple-glow': '#9333ea',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-green': '0 0 20px rgba(0, 255, 163, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.4)',
        'led-purple': '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}