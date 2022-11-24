const logger = require("./logger");
const execute = require("child_process").exec;
const alert = require("alert");
const prompt = require("prompt-sync")();

const path = prompt("Please enter path to your file: ");
const ext = path.split(".").slice(1).join(".");

if (
  ext === "txt" ||
  ext === "png" ||
  ext === "jpg" ||
  ext === "wav" ||
  ext === "mp3"
) {
  execute(path);
} else {
  alert("File extension is not supported.");
}

logger.appLogger.log(
  "info",
  `Success! \n Path is: ${path} \n Extension is: ${ext}`
);
