const AP = require('article-parser');
var nodePandoc = require('node-pandoc-promise');

const url = process.argv[2];
 
const getArticle = async (url) => {
  try {
    const article = await AP.extract(url);
    return article;
  } catch (err) {
    console.trace(err);
  }
};

getArticle(url).then(res=>{

`
<dc:title id="epub-title-1">${res.title}</dc:title>
<dc:date>${res.published}</dc:date>
<dc:language>en-US</dc:language>
<dc:creator id="epub-creator-1" opf:role="aut">${res.author}</dc:creator>
`

// TODO: Write res.content into a temp file

const imageUrl = res.image

nodePandoc(tmpFile, ['-o', 'filel.epub', '--epbu-cover-image', 'file.png', '--epub-metadata=something.xml'])
	.then(res=>{
	  console.log(res);  
	}).catch(err=>{
	    console.error('Oh No: ',err);  
	});
})