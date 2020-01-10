const AP = require("article-parser");
const tempFile = require("tempfile");
const nodePandoc = require("node-pandoc-promise");
const fs = require("fs");
const { DownloaderHelper } = require("node-downloader-helper");

const getArticle = async url => {
  try {
    const article = await AP.extract(url);
    return article;
  } catch (err) {
    console.trace(err);
  }
};

module.exports = (url, epubPath, language="en-US") => {
  getArticle(url).then(res => {
    let xml = `<dc:title id="epub-title-1">${res.title}</dc:title>
<dc:date>${res.published}</dc:date>
<dc:language>${language}</dc:language>
<dc:identifier>${url}</dc:identifier>
<dc:creator id="epub-creator-1" opf:role="aut">${res.author}</dc:creator>`;

    let html = tempFile(".html");
    let metadata = tempFile(".xml");

    fs.writeFileSync(html, res.content);
    fs.writeFileSync(metadata, xml);

    const imageUrl = res.image;

    const dl = new DownloaderHelper(res.image, "/tmp", {
      fileName: "epub-to-image.jpg"
    });

    dl.start();

    dl.on("end", () => {
      nodePandoc(html, [
        "-o",
        epubPath,
        `--epub-cover-image=/tmp/epub-to-image.jpg`,
        `--epub-metadata=${metadata}`
      ])
        .then(res => {
          console.log(`Generated EPUB file at ${epubPath}`);
        })
        .catch(err => {
          console.error("Oh No: ", err);
        });
    });
  });
};
