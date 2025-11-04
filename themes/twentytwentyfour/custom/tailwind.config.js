const { palette } = require("./style");
module.exports = {
  content: ["./**/*.php", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: palette.main,
      },
    },
  },
  plugins: [],
};
