/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0d1420',
          900: '#121b2b',
          800: '#182338',
          700: '#213049',
          600: '#2c3f5c',
        },
        paper: {
          50: '#faf6ec',
          100: '#f3ecd9',
          200: '#e9dfc3',
          300: '#ddd0ac',
          400: '#c9b98d',
        },
        gold: {
          400: '#e8c477',
          500: '#d4a54a',
          600: '#b5863a',
          700: '#8f6a2c',
        },
        rust: {
          500: '#b6613a',
          600: '#94492a',
        },
        ink: {
          900: '#241d12',
          800: '#332a1c',
        }
      },
      fontFamily: {
        display: ['"Special Elite"', 'cursive'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        hand: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        'paper-texture': "radial-gradient(ellipse at top left, rgba(255,255,255,0.06), transparent 60%), radial-gradient(ellipse at bottom right, rgba(0,0,0,0.15), transparent 60%)",
      },
      boxShadow: {
        'paper': '0 2px 6px rgba(0,0,0,0.35), 0 12px 24px -8px rgba(0,0,0,0.45)',
        'tape': 'inset 0 0 0 1px rgba(0,0,0,0.06)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'twinkle': 'twinkle 3.2s ease-in-out infinite',
        'drift': 'drift 60s linear infinite',
        'shoot': 'shoot 3.5s linear forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.2deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.25 },
          '50%': { opacity: 1 },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-40px, 30px)' },
        },
        shoot: {
          '0%': { transform: 'translate(0,0) rotate(45deg)', opacity: 0 },
          '5%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { transform: 'translate(420px, 420px) rotate(45deg)', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
