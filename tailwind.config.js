/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F5F5F5", // Un gris muy claro, casi blanco
          alt: "#ECECEC", // Una alternativa ligeramente más oscura
        },
        primary: {
          DEFAULT: "#003366", // Azul marino
          light: "#336699", // Versión más clara
          dark: "#001F3F", // Versión más oscura
        },
        secondary: {
          DEFAULT: "#FFA500", // Naranja claro
          light: "#FFD700", // Versión más clara
          dark: "#FF8C00", // Versión más oscura
        },
        neutral: {
          DEFAULT: "#333333", // Para texto principal
          light: "#666666", // Para texto secundario
          extraLight: "#999999", // Para texto terciario o deshabilitado
        },
      },
    },
  },
  plugins: [],
};
