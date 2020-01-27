const AP = require("article-parser");
const tempFile = require("tempfile");
const nodePandoc = require("node-pandoc-promise");
const fs = require("fs");
const { DownloaderHelper } = require("node-downloader-helper");
const path = require('path');
const slugify = require('slugify');

const getArticle = async url => {
  try {
    const article = await AP.extract(url);
    return article;
  } catch (err) {
    console.trace(err);
  }
};

module.exports = (url, epubPath, title, coverURL, language="en-US") => {
  getArticle(url).then(res => {

    title = title ? title : res.title;

    epubPath = epubPath ? epubPath : slugify(path.basename(url)) + '.epub';

    let xml = `<dc:title id="epub-title-1">${title}</dc:title>
<dc:date>${res.published}</dc:date>
<dc:language>${language}</dc:language>
<dc:identifier>${url}</dc:identifier>
<dc:source>${url}</dc:source>
<dc:description>${res.description}</dc:description>
<dc:publisher>${res.source}</dc:publisher>
<dc:creator opf:role="aut">${res.author}</dc:creator>`;

    let html = tempFile(".html");
    let metadata = tempFile(".xml");

    fs.writeFileSync(html, res.content);
    fs.writeFileSync(metadata, xml);
    const imageUrl = coverURL ? coverURL : res.image;

    const dl = new DownloaderHelper(imageUrl, "/tmp", {
      fileName: "epub-to-image.jpg",
      override: true
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
