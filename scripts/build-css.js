const path = require("path");
const fs = require("fs");

async function generateTailwind() {
  const base = path.resolve(__dirname, "..");
  const outputPath = path.join(base, "app", "tailwind.css");
  
  try {
    let compile;
    try {
      ({ compile } = require("@tailwindcss/node"));
    } catch {
      ({ compile } = require(path.join(base, "node_modules", "@tailwindcss", "node", "dist", "index.js")));
    }

    let oxide;
    try {
      oxide = require("@tailwindcss/oxide");
    } catch {
      try {
        oxide = require(path.join(base, "node_modules", "@tailwindcss", "oxide-win32-x64-msvc", "tailwindcss-oxide.win32-x64-msvc.node"));
      } catch (e) {
        console.warn("[build-css] Oxide not loaded, will fallback to existing css if present.");
      }
    }

    if (compile && oxide && oxide.Scanner) {
      const baseCssPath = path.join(base, "node_modules", "tailwindcss", "index.css");
      if (fs.existsSync(baseCssPath)) {
        const baseCss = fs.readFileSync(baseCssPath, "utf8");
        const css = baseCss + "\n@custom-variant dark (&:where(.dark, :is(.dark *)));\n";

        const compiler = await compile(css, { base });
        const scanner = new oxide.Scanner({
          sources: [
            { base, pattern: "app/**/*.{tsx,ts,jsx,js}", negated: false }
          ]
        });

        const candidates = scanner.scan();
        const output = compiler.build([...candidates]);
        fs.writeFileSync(outputPath, output, "utf8");
        console.log(`[build-css] Compiled ${candidates.length} candidates (${output.length} bytes) to app/tailwind.css`);
        return;
      }
    }

    if (fs.existsSync(outputPath)) {
      console.log("[build-css] Using pre-compiled app/tailwind.css.");
    }
  } catch (err) {
    console.warn("[build-css] Note:", err.message);
    if (fs.existsSync(outputPath)) {
      console.log("[build-css] Using pre-compiled app/tailwind.css.");
    } else {
      throw err;
    }
  }
}

generateTailwind();
