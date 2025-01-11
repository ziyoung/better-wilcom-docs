const globby = require("globby");
const { readFileSync, writeFileSync } = require("fs");
const { default: axios } = require("axios");
const prefix = "https://docs.wilcom.com/embroiderystudio/e4/en/MainHelp";
const { parse } = require("node-html-parser");
const mapping = require("../meta/glossary-mapping.json");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const instance = axios.create({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
  },
});

const list = globby.sync(["./wilcom-docs/**/*.md"]);

(async function () {
  let i = -1;
  const files = new Set();
  for (const file of list) {
    i++;
    // console.log("Processing: ", file, i);
    let originFile = readFileSync(file, "utf8").toString();
    if (originFile.includes("glossary/glossary)")) {
      const reg = /\[[^\]]+?\]\([^\)]+?\)/g;
      const match = originFile.match(reg);
      if (match) {
        const links = match.filter((item) =>
          item.includes("glossary/glossary"),
        );
        for (const link of links) {
          const [key, linkText] = link.slice(1, -1).split("](");
          console.log(key, linkText);
          if (mapping[key]) {
            originFile = originFile.replace(
              link,
              `[${key}](${linkText}#${mapping[key]})`,
            );
          }
        }
        writeFileSync(file, originFile);
        console.log("update ", file);
        // files.add(match);
        // return
        // break;
      }
    }
  }
  console.log(files.size);
  writeFileSync("./tags.json", JSON.stringify([...files], null, 2));
})();

// for (const file of list) {
//   const links = extractMarkdownLink(originFile);
//   if (links.length) {
//     for (const link of links) {
//       const originUrl = link.split('(')[1].split(')')[0];
//       const standardUrl = decodeURIComponent(originUrl);
//       let url = standardUrl;
//       if (url.includes('.htm#')) {
//         url = url.split('.htm#')[0]
//       }
//       // const url = decodeURIComponent(originUrl).replace('.htm', '');
//       originFile = originFile.replace(originUrl, url);
//     }
//     writeFileSync(file, originFile);
//     console.log(`${file} has ${links.length} links`);
//     // console.log(`${file} has ${links.length} links`);
//     // console.log(file, links);
//   }
// }
