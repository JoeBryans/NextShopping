import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#047857",
          secondary: "#2084A2",
          accent: "#059669",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--tab-radius": "0.5rem",
          // "light", "dark", "cupcake"

        },
      },
    ],}
} satisfies Config;
