import type { Config } from 'tailwindcss';
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  theme: { extend: { colors: { seb: { 50:'#eef8f3',100:'#d8eee3',500:'#00935f',600:'#007a4d',700:'#006639',900:'#12372a' } }, boxShadow: { soft:'0 10px 30px rgba(18,55,42,.08)' } } },
  plugins: []
} satisfies Config;
