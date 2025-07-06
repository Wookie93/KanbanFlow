import type { Config } from "tailwindcss";
import sharedConfig from "@wookie-monorepo/tailwind-config";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;