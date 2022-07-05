// const fs = require("fs");

// // read data stream
// const readText = fs.createReadStream("./readWriteStream/output.txt", {
//   highWaterMark: 10,
// });

// let value = "";

// function readData() {
//   try {
//     value = readText.read();
//     process.stdout.write(`[ ${value} ]\n`);
//   } catch (error) {
//     console.log("==>", error.message);
//   }
// }

// readText.on("readable", readData);
// readText.on("end", () => {
//   console.log(`\n => DONE`);
// });

// ======================================================================================

const fs = require("fs");
const { resolve } = require("path");

const readableStream = fs.createReadStream(resolve(__dirname, "input.txt"), {
  highWaterMark: 50,
});

const writableStream = fs.createWriteStream(resolve(__dirname, "output.txt"));

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  writableStream.end();
});
