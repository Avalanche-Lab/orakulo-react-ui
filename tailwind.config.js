import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        destructive: "var(--destructive)",
        destructive_foreground: "var(--destructive-foreground)",
        muted: "var(--muted)",
        muted_foreground: "var(--muted-foreground)",
        accent: "var(--muted)",
        accent_foreground: "var(--muted-foreground)",
        card: "var(--card)",
        card_foreground: "var(--card-foreground)",
        popover: "var(--card)",
        popover_foreground: "var(--card-foreground)",
        secondary: "var(--muted)",
        secondary_foreground: "var(--muted-foreground)",
      },
    },
  },
  plugins: [],
};
