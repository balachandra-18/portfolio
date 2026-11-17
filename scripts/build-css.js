const path = require("path");
const fs = require("fs");

async function generateTailwind() {
  const base = path.resolve(__dirname, "..");
  
  // Try to use @tailwindcss/node and @tailwindcss/oxide if available
  try {
    const { compile } = require(path.join(base, "node_modules", "@tailwindcss", "node", "dist", "index.js"));
    const oxide = require(path.join(base, "node_modules", "@tailwindcss", "oxide-win32-x64-msvc", "tailwindcss-oxide.win32-x64-msvc.node"));

    const baseCss = fs.readFileSync(path.join(base, "node_modules", "tailwindcss", "index.css"), "utf8");
    const css = baseCss + "\n@custom-variant dark (&:where(.dark, :is(.dark *)));\n";

    const compiler = await compile(css, { base });
    const scanner = new oxide.Scanner({
      sources: [
        { base, pattern: "app/**/*.{tsx,ts,jsx,js}", negated: false }
      ]
    });

    const candidates = scanner.scan();
    const output = compiler.build([...candidates]);
    const outputPath = path.join(base, "app", "tailwind.css");
    fs.writeFileSync(outputPath, output, "utf8");
    console.log(`[build-css] Successfully compiled ${candidates.length} candidates (${output.length} bytes) to app/tailwind.css`);
  } catch (err) {
    console.warn("[build-css] Warning during CSS compilation:", err.message);
    // If output file already exists, don't crash the build
    const outputPath = path.join(base, "app", "tailwind.css");
    if (fs.existsSync(outputPath)) {
      console.log("[build-css] Existing app/tailwind.css found, proceeding with build.");
    } else {
      throw err;
    }
  }
}

generateTailwind();
