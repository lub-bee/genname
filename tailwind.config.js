module.exports = {
    content: [
        './src/*.{js,jsx}',
        './src/Components/*.{js,jsx}',
    ],
    // darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                '2xs': '0.6rem',
            },

            animation: {
                'spin-once': 'spin 500ms linear',
            }
        },
    },
    variants: {},
    plugins: [],
  }
  