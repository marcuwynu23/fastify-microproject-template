const {build} = require("esbuild");
const alias = require("esbuild-plugin-alias");
const path = require("path");

build({
  entryPoints: ["src/index.ts"],
  outfile: "build/bundle.js",
  bundle: true,
  platform: "node",
  target: "node18",
  minify: true,
  sourcemap: false,
  plugins: [
    alias({
      "@": path.resolve(__dirname, "src"), // <== Adjust this if your alias points elsewhere
    }),
  ],
  resolveExtensions: [".ts", ".js", ".json"],
})
  .then(() => {
    console.log("✅ esbuild bundling completed.");
  })
  .catch((err) => {
    console.error("❌ esbuild bundling failed:", err);
    process.exit(1);
  });
