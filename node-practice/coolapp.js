const { exec } = require("child_process");

const prompt = require("prompt-sync")();

const path = prompt("Please enter path to your file: ");

const ext = path.split(".").slice(1).join(".");

if (ext === "txt") {
  var spawnObj = require("child_process").execFile,
    textToOpen = spawnObj("C:/windows/notepad.exe", [`${path}`]);
  return;
} else if (ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "webp") {
  var spawnObj = require("child_process").execFile,
    progToOpen = spawnObj(
      "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe",
      [`${path}`]
    );
  return;
} else if (ext === "mp3" || ext === "wma" || ext === "flac") {
  var spawnObj = require("child_process").execFile,
    audioToOpen = spawnObj(
      "C:/Program Files (x86)/Windows Media Player/wmplayer.exe",
      [`${path}`]
    );
  return;
} else {
  const alert = require("alert");
  alert("This file is not supported.");
}

console.log(`Path is ${path}`);
console.log(`Extension is ${ext}`);
