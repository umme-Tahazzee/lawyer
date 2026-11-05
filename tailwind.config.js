/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1120px" } },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        gold: { DEFAULT: "hsl(var(--gold))", light: "hsl(var(--gold-light))" },
      },
      boxShadow: {
        soft: "10px 10px 24px rgba(150,110,70,.18), -8px -8px 20px rgba(255,255,255,.85)",
        "soft-sm": "5px 5px 12px rgba(150,110,70,.18), -4px -4px 10px rgba(255,255,255,.85)",
        inset: "inset 3px 3px 7px rgba(150,110,70,.15), inset -3px -3px 7px rgba(255,255,255,.9)",
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
    },
  },
  plugins: [],
};
