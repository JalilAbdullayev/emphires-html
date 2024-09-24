/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts}", "./**/*.{html,js,ts}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem'
                },
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

