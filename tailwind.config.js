module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,ts,jsx,tsx,vue}",
    "../pages/**/*.{js,ts,jsx,tsx,vue}",
  ],
  media: false,
  corePlugins: {
    preflight: false,
  },
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1274px",
      },
    },
    colors: {
      primary: "#4A3AFF",
      "primary-bold": "#3120e9",
      secondary: "#6F6C90",
      "primary-light": "#4a3aff26",
      white: "#ffffff",
      danger: "#db0b0b",
      "gray-300": "#EFF0F6",
      "gray-400": "#D9DBE9",
      "gray-800": "#170F49",
    },
    extend: {
      boxShadow: {
        ssx: "0px 2px rgba(19, 18, 66, 0.07)",
        sx: "0px 2px 6px rgba(19, 18, 66, 0.07)",
        sm: "0px 3px 12px rgba(74, 58, 255, 0.18)",
        md: "0px 8px 25px rgba(13, 10, 44, 0.06);",
        lg: "0px 5px 16px rgba(8, 15, 52, 0.06)",
      },
      invert: {
        38: ".38",
      },
      sepia: {
        99: ".99",
      },
      saturate: {
        6919: ".6919",
      },
      hueRotate: {
        245: "245deg",
      },
      brightness: {
        100: ".100",
      },
      contrast: {
        102: ".102",
      },
    },
  },
};
