
import type { Config } from "tailwindcss";
import { colors } from './tokens';

const config: Config = {
  content: [
    "../../apps/kanbanflow/src/**/*.{ts,tsx,mdx}",
    "../ui/src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      }
    },
  },
  plugins: [],
};

export default config;