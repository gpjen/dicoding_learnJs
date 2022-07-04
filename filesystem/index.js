const fs = require("fs");

const fileReadCb = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
};

// console.log(path);

fs.readFile("./filesystem/readTodo.txt", "UTF-8", fileReadCb);
