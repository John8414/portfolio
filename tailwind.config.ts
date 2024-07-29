import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'card-shadow': '0 5px 15px -3px #4aa6b3',
      },
      colors: {
        'gray-regular': '#444440',
        'gray-bg': '#E0E0E0',
        'blue-regular': '#4aa6b3',
        'background': '#1c1c1c'
      },
    },
  },
  plugins: [],
};
export default config;