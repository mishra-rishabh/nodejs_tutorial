const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "files", "someText.txt");

const contentToWrite = "Vande Mataram. I am a Blockchain Developer."

// 1. async way
/* fs.writeFile(filePath, contentToWrite, (err) => {
    if(err) {
        throw new Error ("Error while writing a file!");
    }
    console.log("Write operation is completed successfully!");

    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err) {
            throw new Error(err);
        }
        console.log(data);
    });
}); */

// 2. sync way.
try {
    const contentToWrite2 = "Synchronous way of writing a file";
    fs.writeFileSync(filePath, contentToWrite2, (err) => {
        if(err) {
            throw new Error ("Error while writing a file!");
        }
    });
} catch (error) {
    console.log(error);   
}

// 3. promise way.
const writeFilePromiseWay = async () => {
    try {
        const contentToWrite3 = "promise way of writing a file";  
        await fsPromise.writeFile(filePath, contentToWrite3);
        
        await fsPromise.writeFile(filePath, "\nThis will not overwrite the content and add the new content everytime", {
            flag: "a+"
        });

        // this will not overwrite the content, instead it will append the content at last.
        await fsPromise.appendFile(filePath, "\nThis is an appended content");

        const data = await fsPromise.readFile(filePath);
        console.log(data.toString());
    } catch (error) {
        console.log(error);
    }
}

writeFilePromiseWay();
/* 
    NOTE: Comment the other 2 ways of writing a file while running either of them,
    else it will overwrite the content, or use appendFile function
*/