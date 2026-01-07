/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            colors: {
                paper: '#fafafa',
                'paper-dark': '#f0f0eb',
            },
            boxShadow: {
                'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
}
