/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors:{
                'azul-h': '#243cff',
                'rojo-h': '#fc0320'
            },
            spacing:{
                '42': '170px'
            },
            width:{
                '43': '166px'
            },
            screens:{
                'ssm': '350px',
                'tablet':'900px'
            }
        },
    },
    plugins: [],
}

