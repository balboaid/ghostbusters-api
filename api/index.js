const fastify = require("fastify")();
const axios = require("axios");
const { spawn } = require("child_process");
const detectGhost = require("./utils/detectGhost");

fastify.get("/", async () => {
  return { message: "Ghostbusters API is running" };
});

// Endpoint principal: valida URL
fastify.post("/validate", async (req) => {
  const { url } = req.body;

  if (!url) return { error: "url is required" };

  const platform = identifyPlatform(url);

  switch (platform) {
    case "gupy":
      return runPythonScraper("gupy.py", url);

    case "greenhouse":
      return greenhouseScraper(url);

    case "lever":
      return leverScraper(url);

    default:
      return { error: "Unsupported platform" };
  }
});

// Detecta plataforma pela URL
function identifyPlatform(url) {
  if (url.includes("gupy")) return "gupy";
  if (url.includes("greenhouse")) return "greenhouse";
  if (url.includes("lever")) return "lever";
  return "unknown";
}

// Dispara scraper Python
function runPythonScraper(script, url) {
  return new Promise((resolve) => {
    const py = spawn("python", [`api/scrappers/${script}`, url]);

    let result = "";
    py.stdout.on("data", (data) => (result += data.toString()));

    py.on("close", () => resolve(JSON.parse(result)));
  });
}

// Import scrapers JS
const greenhouseScraper = require("./scrappers/greenhouse");
const leverScraper = require("./scrappers/lever");

// Iniciar servidor
fastify.listen({ port: 3000 }, () => {
  console.log("Ghostbusters API is running on port 3000");
});