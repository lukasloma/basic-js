const characters = "0123456789ABCDEFGHIJKLMNOPRSTUWXYZ";
const countMarks = 1000;
const howManyChar = 10;

const btn = document.querySelector("button");
const section = document.querySelector("section");

let generate = function () {
  for (let i = 0; i < countMarks; i++) {
    let drawChar = "";
    for (let i = 0; i < howManyChar; i++) {
      let index = Math.floor(Math.random() * characters.length);
      drawChar += characters[index];
    }
    const div = document.createElement("div");
    div.textContent = drawChar;
    section.appendChild(div);
  }
};

btn.addEventListener("click", generate);
