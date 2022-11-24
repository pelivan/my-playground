const logger = require("./logger");
const execute = require("child_process").exec;
const alert = require("alert");
const prompt = require("prompt-sync")();
let path = "";
process.argv[2]
  ? (path = process.argv[2])
  : (path = prompt("Please enter path to your file: "));

let ext = "";
const i = path.lastIndexOf(".");
if (i >= 0) {
  ext = path.substring(i + 1);
}
const supportedExt = ["txt", "png", "jpg", "wav", "mp3"];

if (supportedExt.includes(ext)) {
  execute(path);
} else {
  alert("File extension is not supported.");
}

logger.appLogger.log(
  "info",
  `Success! \n Path is: ${path} \n Extension is: ${ext}`
);
