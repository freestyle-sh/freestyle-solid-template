import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  solid: {
    babel: {
      plugins: [["@babel/plugin-proposal-decorators", { version: "2023-11" }]],
    },
  },
  server: {
    preset: "./preset",
  },
});
