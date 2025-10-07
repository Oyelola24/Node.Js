const fs = require("fs");
try {
  fs.writeFileSync("task3/welcome.txt", "Hello Node!!!!");
  console.log("File created successfully");
} catch (error) {
  console.log(error);
}
fs.readFile("task3/hello.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});