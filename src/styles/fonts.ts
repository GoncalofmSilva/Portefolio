import { JetBrains_Mono, Newsreader } from "next/font/google";

// next/font descarrega as fontes no build e serve-as do próprio domínio:
// o browser do visitante nunca faz pedidos ao Google Fonts.

/** Serifa para títulos e texto corrido (variável, com eixo de tamanho ótico). */
export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});

/** Monoespaçada só para código e nomes técnicos. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

/** Classes a aplicar no <html> em app/layout.tsx. */
export const fontVariables = `${newsreader.variable} ${jetbrainsMono.variable}`;
