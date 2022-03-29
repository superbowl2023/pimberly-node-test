const fs = require("fs");

const path = "./testfile.csv";

if (fs.existsSync(path)) {
  // path exists
  console.log("exists:", path);
} else {
  console.log("DOES NOT exist:", path);
}