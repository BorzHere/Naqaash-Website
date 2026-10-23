/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./content/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        brand: "var(--brand)",
        "brand-dark": "var(--brand-ink)",
        "brand-soft": "var(--brand-soft)",
        "on-brand": "var(--on-brand)",
        gold: "var(--gold)",
        "gold-dark": "var(--gold-ink)",
        "gold-soft": "var(--gold-soft)",
        teal: "var(--teal)",
        "teal-dark": "var(--teal-ink)",
        "teal-soft": "var(--teal-soft)",
        canvas: "var(--bg)",
        surface: "var(--surface)",
        sunk: "var(--sunk)",
        line: "var(--line)",
        plum: "var(--band)",
        "plum-light": "var(--band-2)",
        "band-fg": "var(--band-fg)",
        "band-muted": "var(--band-muted)",
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "sans-serif"],
        body: ["Figtree", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        urdu: ["Noto Nastaliq Urdu", "serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        stamp: "0 20px 50px rgba(20, 8, 35, .45)",
      },
    },
  },
  plugins: [],
};
