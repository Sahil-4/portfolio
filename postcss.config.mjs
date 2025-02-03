const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        text: "#fca311",
        accent: "#e5e5e5",
      },
    },
  },
};

export default config;
