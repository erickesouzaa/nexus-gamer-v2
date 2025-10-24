// tailwind.config.ts (FINAL)
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ESQUEMA DE CORES: PRETO E CIANO
        'nexus-dark': '#000000',      // Fundo (Preto Total)
        'nexus-primary': '#00FFFF',   // Destaque/Glow (Ciano Elétrico)
        'nexus-secondary': '#e2e8f0', // Texto (Cinza Prata Claro)
        'nexus-accent': '#334155',    // Borda/Detalhe (Cinza Metálico)
      },
    },
  },
  plugins: [],
};
export default config;