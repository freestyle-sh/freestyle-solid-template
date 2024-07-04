import type { NitroPreset } from "nitropack";
import { fileURLToPath } from "node:url";

export default <NitroPreset>{
  entry: fileURLToPath(new URL("./entry.ts", import.meta.url)),
  exportConditions: ["deno"],
  node: false,
  noExternals: true,
  serveStatic: "inline",
  commands: {
    deploy: "npx freestyle deploy",
  },
  rollupConfig: {
    preserveEntrySignatures: false,
    external: (id) => id.startsWith("https://"),
    output: {
      
      entryFileNames: "index.ts",
      manualChunks: (id) => {
          return "index";
      },
      format: "esm",
    },
  },
  hooks: {
    compiled() {
      console.log("☁️ Compiled for Freestyle");

      // ...
    },
  },
};
