module.exports = {
  purge: [`_site/**/*.html`, `_site/**/*.css`],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        arrow: "url(/assets/img/arrow.svg)",
        arrowWhite: "url(/assets/img/arrow-white.svg)",
      }),
    },
    screens: {
      xxs: "370px",
      xs: "450px",
      xm: "480px",
      sm: "570px",
      s: { max: "570px" },
      sl: "680px",
      "md-max": { max: "768px" },
      md: "768px",
      "lg-max": { max: "1024px" },
      lg: "1024px",
      l: "1199px",
      xl: "1440px",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      nav: "350px",
      full: "100%",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      s: ["12px", "20px"],
      sm: ["14px", "22px"],
      base: ["14px", "24px"],
      l: ["18px", "25px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["32px", "44px"],
    },
    textColor: {
      white: "#fff",
      black: "#151512",
      peach: "#D1A69D",
    },
    colors: {
      white: "#fff",
      black: "#151512",
      peach: "#D1A69D",
    },
  },
  variants: {},
  plugins: [],
};
