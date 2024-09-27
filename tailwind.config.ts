import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        text: {
          primary: "var(--text-primary)",
          body: "var(--text-body)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          brand: "var(--text-brand)",
          interactive: {
            disabled: "var(--text-disabled)",
            active: "var(--text-interactive-active)",
            error: "var(--text-interactive-error)",
            valid: "var(--text-interactive-valid)",
          },
        },
        border: {
          DEFAULT: "var(--border-base)",
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          interactive: {
            hover: "var(--border-interactive-hover)",
            selected: "var(--border-interactive-selected)",
            focus: "var(--border-interactive-focus)",
            disabled: "var(--border-interactive-disabled)",
            active: "var(--border-interactive-active)",
            error: "var(--border-interactive-error)",
            valid: "var(--border-interactive-valid)",
          },
        },
        background: {
          DEFAULT: "var(--background)",
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
          brand: "var(--background-brand)",
          interactive: {
            hover: "var(--background-interactive-hover)",
            selected: "var(--background-interactive-selected)",
            pressed: "var(--background-interactive-pressed)",
            disabled: "var(--background-interactive-disabled)",
            active: "var(--background-interactive-active)",
            error: "var(--background-interactive-error)",
            valid: "var(--background-interactive-valid)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
