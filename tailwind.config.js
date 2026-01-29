export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // J'ai déduit un noir "classe" et un blanc cassé de ta description
                primary: "#FFFFFF", // Blanc
                secondary: "#000000", // Noir
                accent: "#C9CDD5", // Gris
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assure-toi d'importer Inter dans index.html ou CSS
            }
        },
    },
    plugins: [],
}