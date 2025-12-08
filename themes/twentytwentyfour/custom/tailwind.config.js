const { palette } = require("./style");
module.exports = {
  content: [
    "./**/*.php", 
    "./src/**/*.{js,ts,jsx,tsx}",
    "../header.php",
    "../**/*.php"
  ],
  theme: {
    extend: {
      colors: {
        main: palette.main,
      },
    },
  },
  plugins: [],
};
