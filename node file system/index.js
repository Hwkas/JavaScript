const fs = require("fs");

fs.writeFile("m.txt", "This is a test message", (err) => {
  if (err) throw err;
  console.log("Success!");
});

fs.readFile("m.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
