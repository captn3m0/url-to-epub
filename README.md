# url-to-epub

![npm](https://img.shields.io/npm/v/url-to-epub?style=flat-square)

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
  --version       Show version number                                  [boolean]
  -h              Show help                                            [boolean]
  --output, -o    Output file to save EPUB[string] [default: "url-to-epub.epub"]
  --title, -t     Title of the book, if not the same as the page title
                                                        [string] [default: null]
  --cover-url     Image URL to download as cover        [string] [default: null]
  --language, -l  A valid language tag
     [string] [choices: "af", "af-ZA", "ar", "ar-AE", "ar-BH", "ar-DZ", "ar-EG",
         "ar-IQ", "ar-JO", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-OM", "ar-QA",
          "ar-SA", "ar-SY", "ar-TN", "ar-YE", "az", "az-AZ", "az-Cyrl-AZ", "be",
   "be-BY", "bg", "bg-BG", "bs-BA", "ca", "ca-ES", "cs", "cs-CZ", "cy", "cy-GB",
         "da", "da-DK", "de", "de-AT", "de-CH", "de-DE", "de-LI", "de-LU", "dv",
      "dv-MV", "el", "el-GR", "en", "en-AU", "en-BZ", "en-CA", "en-CB", "en-GB",
   "en-IE", "en-JM", "en-NZ", "en-PH", "en-TT", "en-US", "en-ZA", "en-ZW", "eo",
   "es", "es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-DO", "es-EC", "es-ES",
         "es-GT", "es-HN", "es-MX", "es-NI", "es-PA", "es-PE", "es-PR", "es-PY",
   "es-SV", "es-UY", "es-VE", "et", "et-EE", "eu", "eu-ES", "fa", "fa-IR", "fi",
      "fi-FI", "fo", "fo-FO", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-FR", "fr-LU",
      "fr-MC", "gl", "gl-ES", "gu", "gu-IN", "he", "he-IL", "hi", "hi-IN", "hr",
   "hr-BA", "hr-HR", "hu", "hu-HU", "hy", "hy-AM", "id", "id-ID", "is", "is-IS",
      "it", "it-CH", "it-IT", "ja", "ja-JP", "ka", "ka-GE", "kk", "kk-KZ", "kn",
    "kn-IN", "ko", "ko-KR", "kok", "kok-IN", "ky", "ky-KG", "lt", "lt-LT", "lv",
      "lv-LV", "mi", "mi-NZ", "mk", "mk-MK", "mn", "mn-MN", "mr", "mr-IN", "ms",
         "ms-BN", "ms-MY", "mt", "mt-MT", "nb", "nb-NO", "nl", "nl-BE", "nl-NL",
      "nn-NO", "ns", "ns-ZA", "pa", "pa-IN", "pl", "pl-PL", "ps", "ps-AR", "pt",
         "pt-BR", "pt-PT", "qu", "qu-BO", "qu-EC", "qu-PE", "ro", "ro-RO", "ru",
   "ru-RU", "sa", "sa-IN", "se", "se-FI", "se-NO", "se-SE", "sk", "sk-SK", "sl",
     "sl-SI", "sq", "sq-AL", "sr-BA", "sr-Cyrl-BA", "sr-SP", "sr-Cyrl-SP", "sv",
          "sv-FI", "sv-SE", "sw", "sw-KE", "syr", "syr-SY", "ta", "ta-IN", "te",
      "te-IN", "th", "th-TH", "tl", "tl-PH", "tn", "tn-ZA", "tr", "tr-TR", "tt",
       "tt-RU", "ts", "uk", "uk-UA", "ur", "ur-PK", "uz", "uz-UZ", "uz-Cyrl-UZ",
         "vi", "vi-VN", "xh", "xh-ZA", "zh", "zh-CN", "zh-HK", "zh-MO", "zh-SG",
                                      "zh-TW", "zu", "zu-ZA"] [default: "en-US"]

Examples:
  url-to-epub --title "Articulated Restraint" -o articulated-restraint.epub
  "https://www.tor.com/2019/02/06/articulated-restraint-mary-robinette-kowal/"
```

## HACKING

There is a list of planned items in [TODO.md](TODO.md).

## License

Licensed under the [MIT License](https://nemo.mit-license.org/). See LICENSE file for details.