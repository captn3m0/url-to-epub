#!/usr/bin/env node
var argv = require("yargs").argv;
const generateEPUB = require("./generate");

require("yargs") // eslint-disable-line
  .usage("$0 --output [output] <url>")
  .help("h")
  .command("$0 <url>", "Generate EPUB file from URL", yargs => {
    yargs
      .positional("url", {
        describe: "The URL to download",
        type: "string"
      })
      .option("output", {
        alias: "o",
        type: "string",
        default: "url-to-epub.epub",
        description: "Output file to save EPUB"
      })
      .example(
        '$0 -o articulated-restraint.epub "https://www.tor.com/2019/02/06/articulated-restraint-mary-robinette-kowal/"'
      )
      .demandOption(["url"]);
  }, (argv) => {
    generateEPUB(argv.url, argv.output)
  }).argv;