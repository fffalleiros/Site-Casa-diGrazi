// Casa di Grazi · trecho para tailwind.config.ts / .js (Tailwind v3 + shadcn/ui)
// Mescle dentro de theme.extend. Requer o tema de shadcn-lovable.css.
export const casaDiGraziExtend = {
  colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
    secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
    destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
    muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
    accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
    card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
    popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
    // marca
    crosta: { DEFAULT: "hsl(var(--crosta))", texto: "hsl(var(--crosta-texto))" },
    rosso: "hsl(var(--rosso))",
    "verde-grazi": "hsl(var(--verde-grazi))",
    pizza: "hsl(var(--pizza))",
    focaccia: "hsl(var(--focaccia))",
    success: { DEFAULT: "hsl(var(--success))", bg: "hsl(var(--success-bg))" },
    warning: { DEFAULT: "hsl(var(--warning))", bg: "hsl(var(--warning-bg))" },
    danger: { DEFAULT: "hsl(var(--danger))", bg: "hsl(var(--danger-bg))" },
    info: { DEFAULT: "hsl(var(--info))", bg: "hsl(var(--info-bg))" },
  },
  fontFamily: {
    serif: ['"Instrument Serif"', "Georgia", "serif"],
    sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
    mono: ['"DM Mono"', "ui-monospace", "monospace"],
    hand: ['"Caveat"', "cursive"],
  },
  borderRadius: { lg: "4px", md: "2px", sm: "2px" }, // máximo 4px
  boxShadow: { DEFAULT: "none", sm: "none", md: "none", lg: "none" }, // sem sombras
  letterSpacing: { label: "0.06em", cond: "0.08em" },
  maxWidth: { measure: "64ch", container: "1160px" },
  transitionTimingFunction: { grazi: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
  transitionDuration: { fast: "120ms", DEFAULT: "200ms", slow: "320ms" },
};
// Largura condensada nos rótulos: className="uppercase font-semibold tracking-cond [font-stretch:75%]"
