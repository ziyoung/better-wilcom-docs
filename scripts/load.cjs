const { default: axios } = require("axios");
const { mkdirSync, existsSync, writeFileSync, readdirSync } = require("fs");
const { dirname, join, basename } = require("path");
const prefix = "https://docs.wilcom.com/embroiderystudio/e4/en/MainHelp";
const { parse } = require("node-html-parser");
const { NodeHtmlMarkdown } = require("node-html-markdown");

const instance = axios.create({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
  },
});

function getWorkDir(url) {
  return join("wilcom-docs", url);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadImage(pageUrl, src, dir) {
  const url = new URL(`${prefix}${pageUrl}`);
  const host = url.host;
  const imagePath = join(dirname(url.pathname), src);

  const assetPath = join("assets", basename(src));

  const outputFile = join(dir, assetPath);
  const outputDir = dirname(outputFile);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  if (!existsSync(outputFile)) {
    const imageUrl = `https://${host}${imagePath}`.replace("//", "/");
    const { data } = await instance.get(imageUrl, {
      responseType: "arraybuffer",
    });
    writeFileSync(outputFile, Buffer.from(data));
  }
  console.log("output", assetPath);
  return assetPath;
}

let index = -1;
let currentIndex = -1;

async function run(list) {
  for (const [data, url, children] of list) {
    index++;
    console.log(`current index ==> `, index);
    console.log("process ==> ", data, url);
    if (index > currentIndex) {
      const filename = basename(url);
      const dir = getWorkDir(dirname(url));
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      // const data = await loadHtml();
      const { data: html } = await instance.get(`${prefix}${url}`, {
        responseEncoding: "utf16le",
      });
      const root = parse(html);
      const body = root.querySelector("body");
      const validElements = body?.children || root.children[0].children;
      const elements = validElements.filter(
        (element) =>
          !(
            ["script", "style", "head", "meta"].includes(
              element.rawTagName.toLowerCase(),
            ) || element.attributes?.id === "footer"
          ),
      );
      for (const element of elements) {
        const images = element.querySelectorAll("img") || [];
        for (const image of images) {
          const newSrc = await downloadImage(
            url,
            image.getAttribute("src"),
            dir,
          );
          image.setAttribute("src", newSrc);
        }
      }

      const text = elements.map((element) => element.outerHTML).join("\n");
      writeFileSync(
        join(dir, filename.replace(".htm", ".md")),
        NodeHtmlMarkdown.translate(text),
      );
      await wait(500);
    }
    if (children) {
      await run(children);
    }
  }
}

// 0, 3
// 3
// run(docs.slice(3));

run([["Glossary", "/glossary/glossary.htm?rhhlterm=glossary&rhsyns=%20"]]);
