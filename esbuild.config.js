const {build} = require("esbuild");
const alias = require("esbuild-plugin-alias");
const path = require("path");
const {performance} = require("perf_hooks");

const start = performance.now();

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
      "@": path.resolve(__dirname, "src"),
    }),
  ],
  resolveExtensions: [".ts", ".js", ".json"],
})
  .then(() => {
    const end = performance.now();
    const time = (end - start).toFixed(2);
    console.log(`✅ esbuild bundling completed in ${time}ms`);
  })
  .catch((err) => {
    console.error("❌ esbuild bundling failed:", err);
    process.exit(1);
  });
