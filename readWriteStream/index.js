const fs = require("fs");

// read data stream
const readText = fs.createReadStream("./readWriteStream/output.txt", {
  highWaterMark: 10,
});
// write data Stream
// const writeText = fs.createWriteStream("./readWriteStream/output.txt");

let value = "";

function readData() {
  try {
    value = readText.read();
    process.stdout.write(`[ ${value} ]\n`);
    if (value === null) {
      console.log("-----------------");
    }
  } catch (error) {
    console.log("==>", error.message);
  }
}

readText.on("readable", readData);
readText.on("end", () => {
  console.log(`\n => DONE`);
});
