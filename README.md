# url-to-epub

A simple script that generates an EPUB from a single URL, taking care for the following:

1. Cover Image
2. Readability
3. Standard-compliance metadata (and Author information)

## Installation

You will need `pandoc` and `npm` installed. To install this script globally:

	npm install --global url-to-epub

Please make sure that the global node_modules/bin directory is added to your PATH. 
You can check that directory by running `npm bin --global`.

## Usage

```
url-to-epub <url>

Generate EPUB file from URL

Positionals:
  url  The URL to download                                   [string] [required]

Options:
  --version     Show version number                                    [boolean]
  -h            Show help                                              [boolean]
  --output, -o  Output file to save EPUB  [string] [default: "url-to-epub.epub"]

Examples:
  url-to-epub -o articulated-restraint.epub
  "https://www.tor.com/2019/02/06/articulated-restraint-mary-robinette-kowal/"
```

## License

Licensed under the [MIT License](https://nemo.mit-license.org/). See LICENSE file for details.