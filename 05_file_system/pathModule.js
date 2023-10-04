const path  = require("path");
const filePath = "D:/Rishabh/nodejs_tutorial/05_file_system/files/sample.txt";

// dirname
console.log(path.dirname(filePath));

// basename is file name
console.log(path.basename(filePath));

// extension
console.log(path.extname(filePath));

console.log(__dirname);
console.log(__filename);

// joining path
const tempFile = "tempFile.txt";
console.log(path.join(path.dirname(filePath), tempFile));