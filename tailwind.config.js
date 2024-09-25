/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts}", "./**/*.{html,js,ts}"],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                    '2xl': '1400px'
                }
            }
        },
    },
    plugins: [],
}

