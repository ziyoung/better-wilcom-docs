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
  const tags = new Set();
  for (const file of list) {
    i++;
    console.log("Processing: ", file, i);
    let originFile = readFileSync(file, "utf8").toString();
    // const reg = /<[^>/]+?>/g;
    // while (true) {
    //   const match = reg.exec(originFile);
    //   if (!match) break;
    //   // const tag = match[0].split(' ')[0];
    //   tags.add(match[0]);
    //   console.warn(match[0]);
    // }
    const patterns = [
      '<Ctrl>',
      '<USER>',
      '<Shift>',
      '<PRESET_LETTERING>',
      '<PRESET_SATIN_1>',
      '<PRESET_SATIN_2>',
      '<function>',
      '<prefix>',
      '<number>',
      '<extension>',
      '<Device>'
    ];
    let updated = false;
    for (const pattern of patterns) {
      if (originFile.includes(pattern)) {
        updated = true;
        const newPattern = pattern.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        originFile = originFile.replaceAll(pattern, newPattern);
      }
    }
    if (updated) {
      writeFileSync(file, originFile);
      console.log('update ', file);
    }
  }
  // console.log([...tags]);
  // writeFileSync("./tags.json", JSON.stringify([...tags]));
  console.log('tags', [...tags])
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
