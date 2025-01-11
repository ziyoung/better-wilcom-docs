const globby = require("globby");
const { readFileSync, writeFileSync } = require("fs");
const { default: axios } = require("axios");
const prefix = "https://docs.wilcom.com/embroiderystudio/e4/en/MainHelp";
const { parse } = require("node-html-parser");

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
    console.log("Processing: ", file, i);
    let originFile = readFileSync(file, "utf8").toString();
    const reg = /\n(\d+)\w+/g;
    const match = originFile.match(reg);
    // console.log(match);
    if (
      match &&
      match
        .slice(0, 3)
        .map((item) => item.trim())
        .every((item, index) => item.startsWith(String(index + 1)))
    ) {
      originFile = originFile.replace(reg, function (str, m1) {
        return str.replace(`\n${m1}`, `\n${m1}. `);
      });
      writeFileSync(file, originFile);
      console.log("update ", file);
      // files.add([file, match]);
      // return
    }
  }
  // console.log(files.size);
  // writeFileSync("./tags.json", JSON.stringify([...files], null, 2));
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
