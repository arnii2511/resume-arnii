
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        space: '#080c14',
        midnight: '#0d1520',
        surface: '#111827',
        'surface-2': '#162032',
        teal: {
          DEFAULT: '#4db8d4',
          dim: 'rgba(77,184,212,0.15)',
          glow: 'rgba(77,184,212,0.4)',
        },
        aurora: {
          DEFAULT: '#7ecba1',
          dim: 'rgba(126,203,161,0.15)',
        },
        gold: {
          DEFAULT: '#f0c060',
          dim: 'rgba(240,192,96,0.2)',
        },
        'text-primary': '#e8f4f8',
        'text-secondary': '#8bafc4',
        'text-muted': '#4a6a80',
        'cosmic-border': 'rgba(77,184,212,0.2)',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'nebula-gradient': 'radial-gradient(ellipse at center, rgba(77,184,212,0.15) 0%, transparent 70%)',
        'aurora-gradient': 'radial-gradient(ellipse at center, rgba(126,203,161,0.1) 0%, transparent 70%)',
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'nebula-drift': 'nebula-drift 15s ease-in-out infinite',
        'orbit-ring': 'orbit-ring 20s linear infinite',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(77,184,212,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(77,184,212,0.6)' },
        },
        'nebula-drift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)', opacity: '0.6' },
          '66%': { transform: 'translate(-20px,10px) scale(0.95)', opacity: '0.3' },
        },
        'orbit-ring': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
