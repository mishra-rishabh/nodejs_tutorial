const fs = require("fs");
const path = require("path");
const filePath = "D:/Rishabh/nodejs_tutorial/05_file_system/files/sample.txt";
const fsPromise = require("fs").promises;

// 1. read from a file: asynchronous way
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

// 2. reading file in synchronous way
try {
    // we can also filePath here if we don't want to use path.join
    // const fileData = fs.readFileSync(path.join(__dirname, "files", "sample.txt"));
    // here also we can add character encoding 
    const fileData = fs.readFileSync(path.join(__dirname, "files", "sample.txt"), "utf-8");
    console.log(fileData);
    // console.log(fileData.toString());
} catch (error) {
    console.log(error);
}

// 3. reading file through promises
const readFilePromiseWay = async () => {
    try {
        // we can either use filePath or path.join like above
        const data = await fsPromise.readFile(filePath, {encoding: "utf-8"});
        console.log("readFilePromiseWay: ", data);
    } catch (error) {
        console.log(error);
    }
}

readFilePromiseWay();