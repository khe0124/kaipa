module.exports = {
  content: ["./**/*.php", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#d9ddee", // 가장 밝음
          200: "#b3b7dd",
          300: "#8c94cc",
          400: "#6671bb",
          500: "#102072", // 원래 컬러
          600: "#0d1a5a",
          700: "#0a1443",
          800: "#070d2b",
          900: "#040715", // 가장 어두움
        },
      },
    },
  },
  plugins: [],
};
