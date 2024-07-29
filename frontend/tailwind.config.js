// import daisyui from "daisyui";
// import daisyUIThemes from "daisyui/src/theming/themes";
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],

//   daisyui: {
//     themes: [
//       {
//         light: {
//           ...daisyUIThemes["light"],
//           primary: "#FF6347", // Orange color
//           secondary: "#F0F0F0", // Light golden color
//           accent: "#FF4500", // Darker orange for accents
//           neutral: "#FFFFFF", // White for background
//           "base-100": "#F0F0F0", // Light gray for base
//           info: "#1E90FF", // Light blue for info
//           success: "#32CD32", // Light green for success
//           warning: "#FFA500", // Orange for warning
//           error: "#FF0000", // Light red for error
//         },
//       },
//     ],
//   },
// };
import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347", // Orange color
        secondary: "#F0F0F0", // Light golden color
        accent: "#FF4500", // Darker orange for accents
        neutral: "#FFFFFF", // White for background
        "base-100": "#F0F0F0", // Light gray for base
        info: "#1E90FF", // Light blue for info
        success: "#32CD32", // Light green for success
        warning: "#FFA500", // Orange for warning
        error: "#FF0000", // Light red for error
      },
      boxShadow: {
        neu: "9px 9px 16px #d9d9d9, -9px -9px 16px #ffffff",
        neuHover: "inset 9px 9px 16px #d9d9d9, inset -9px -9px 16px #ffffff",
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        light: {
          ...daisyUIThemes["light"],
          primary: "#FF6347",
          secondary: "#F0F0F0",
          accent: "#FF4500",
          neutral: "#FFFFFF",
          "base-100": "#F0F0F0",
          info: "#1E90FF",
          success: "#32CD32",
          warning: "#FFA500",
          error: "#FF0000",
        },
      },
    ],
  },
};
