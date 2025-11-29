// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
    // 1. CONTENT: Tells Tailwind where to find your class names (inside src/)
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            // 2. CUSTOM TOKENS (Extracted from your old @theme block)

            // COLORS
            colors: {
                'primary': '#2A9D8F',
                'primary-dark': '#238276',
                'secondary': '#264653',
                'background-alt': '#F8F9FA',
                'text': '#264653',
                'text-light': '#6B7280',
            },

            // FONTS
            fontFamily: {
                // Defines classes like "font-heading"
                'heading': ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
                // Defines classes like "font-body"
                'body': ['Lato', 'Roboto', 'system-ui', 'sans-serif'],
            },

            // BORDER RADIUS
            borderRadius: {
                'card': '12px',
                'button': '24px',
            },

            // BOX SHADOWS
            boxShadow: {
                'soft': '0px 4px 20px rgba(0, 0, 0, 0.05)',
                'medium': '0px 6px 30px rgba(0, 0, 0, 0.08)',
                'hover': '0px 8px 40px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [],
};

export default config;