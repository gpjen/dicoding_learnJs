const fs = require("fs");

const readableStream = fs.createReadStream("./The Hunger Games.txt", {
  highWaterMark: 100,
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]\n`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
