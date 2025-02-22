/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enable dark mode using 'class'
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A0A', // Dark background color
                text: '#FFFFFF',       // Light text color
            },
        },
    },
    plugins: [],
};
