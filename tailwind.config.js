export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // J'ai déduit un noir "classe" et un blanc cassé de ta description
                primary: "#1a1a1a", // Fond sombre
                secondary: "#f5f5f5", // Texte clair
                accent: "#3b82f6", // Une couleur pour les boutons/liens (bleu par défaut ici)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assure-toi d'importer Inter dans index.html ou CSS
            }
        },
    },
    plugins: [],
}