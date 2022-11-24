const spawnNewObject = require("child_process").execFile;
const alert = require("alert");

const prompt = require("prompt-sync")();

const path = prompt("Please enter path to your file: ");

const ext = path.split(".").slice(1).join(".");

const notepadPath = "C:/windows/notepad.exe";
const bravePath =
  "C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe";
const wmpPath = "C:/Program Files (x86)/Windows Media Player/wmplayer.exe";

switch (ext) {
  case "txt":
    spawnNewObject(notepadPath, [`${path}`]);
    break;
  case "png":
    spawnNewObject(bravePath, [`${path}`]);
    break;
  case "jpg":
    spawnNewObject(bravePath, [`${path}`]);
    break;
  case "wav":
    spawnNewObject(wmpPath, [`${path}`]);
    break;
  case "mp3":
    spawnNewObject(wmpPath, [`${path}`]);
    break;

  default:
    alert("This file is not supported.");
}

console.log(`Path is ${path}`);
console.log(`Extension is ${ext}`);
