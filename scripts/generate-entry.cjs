const { join, basename, dirname } = require("path");
const docs = require(join(__dirname, "../meta", "wilcom-doc.json"));
const { writeFileSync, readFileSync, existsSync, mkdirSync } = require("fs");

const prefix = "https://docs.wilcom.com/embroiderystudio/e4/en/MainHelp/";

function generateVideoHtml({ title, referenceUrl, videos }) {
  return `
# [${title}](${referenceUrl})

${videos.map(
  (video) => `
<iframe src="${video}" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen="" style="width: 560px; height: 315px;">
</iframe>
  `,
)}
`;
}

function iter(arr, level) {
  const list = [];
  for (const { data, url, children } of arr) {
    const filepath = decodeURIComponent(
      `${url.replace(prefix, "").replace(".htm", ".md")}`,
    );
    const docPath = join("wilcom-docs", filepath);
    const content = readFileSync(docPath, "utf8").toString();
    let barItem = {
      text: data,
    };
    if (content.includes("<iframe")) {
      const videoMdPath = join("wilcom-videos", dirname(filepath));
      if (!existsSync(videoMdPath)) {
        mkdirSync(videoMdPath, { recursive: true });
      }
      const item = {
        title: data,
        referenceUrl: `/${docPath.replace(".md", "")}`,
        videos: [],
      };
      const reg = /src="([^\s]+)"/g;
      while (true) {
        const match = reg.exec(content);
        if (!match) {
          break;
        }
        item.videos.push(match[1]);
      }
      const filename = join(videoMdPath, basename(filepath));
      writeFileSync(filename, generateVideoHtml(item));

      barItem.link = `/${filename.replace(".md", "")}`;
    }
    if (children) {
      barItem.children = iter(children, level + 1);
    }
    list.push(barItem);
  }
  return list;
}

const list = iter(docs, 1);
function removeEmpty(list) {
  const f = (item) => {
    if (!item.children?.length && !item.link) {
      return null;
    }

    const children = item?.children?.map(f).filter(Boolean);
    delete item.children;
    if (children?.length) {
      item.items = children;
    }
    if (item.items?.length || item.link) {
      return item;
    }
    return null;
  };

  return list.map((item) => f(item)).filter(Boolean);
}

writeFileSync(
  join(__dirname, "../meta/videos.json"),
  JSON.stringify(removeEmpty(list), null, 2),
);
