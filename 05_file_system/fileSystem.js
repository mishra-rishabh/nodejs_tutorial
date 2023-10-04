const fs = require("fs");
const path = require("path");
const filePath = "D:/Rishabh/nodejs_tutorial/05_file_system/files/sample.txt";

// read from a file: asynchronous way
fs.readFile(filePath, (err, data) => {
    if(err) {
        throw new Error("Error while reading the file!");
    }

    // this will print data in buffer form
    console.log(data);

    // this will print string
    console.log(data.toString());
});

// we can also pass character encoding and get the data
fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) {
        throw new Error("Error while reading the file!");
    }

    // this will print data in utf-8 format
    console.log(data);
});

// reading file in synchronous way
try {
    // const fileData = fs.readFileSync(path.join(__dirname, "files", "sample.txt"));
    // here also we can add character encoding 
    const fileData = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8");
    console.log(fileData);
    // console.log(fileData.toString());
} catch (error) {
    console.log(error);
}