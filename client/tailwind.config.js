/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        malszx: {
          bg: '#FFD700', // Kuning khas foto
          card: '#FFFFFF',
          dark: '#1A1A1A',
          header: '#2B2B5B', // Biru gelap header
          orange: '#FF8C00',
          red: '#FF3B3B',
          matrix: '#00FF00', // Aksen hijau Matrix
        }
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-hover': '0px 0px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
