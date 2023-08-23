const path = require("path");

const filename = path.basename(__dirname + "/tmp/index.html");

const filenameNoExt = path.basename(__dirname + "/tmp/index.html", ".html");
console.log(filename);
console.log(filenameNoExt);

const dirname = path.dirname(__dirname + "/tmp/index.html");
console.log(dirname);

const ext = path.extname(__dirname + "/tmp/index.html");
console.log(ext);

const patseFile = path.parse(__dirname + "/tmp/index.html");
console.log(patseFile);

const newPath = path.join(__dirname, "tmp");

console.log(newPath);

