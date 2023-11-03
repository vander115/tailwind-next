import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(288px, 320px) 1fr',
        form: 'minmax(120px, 280px) minmax(400px, 1fr) minmax(0, 240px)',
      },
      borderWidth: {
        '6': '0.375rem',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
    },
  },
  plugins: [],
}
export default config
