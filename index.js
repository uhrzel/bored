let letter =
  "This photo breaks my brain , my brain suddenly stopped working. I had to think fast! So I removed my brain, and put some soil inside, connect the nerves and light it up! I'm a rugby boy. 🤩🤩🤩╭∩╮(꘠◞ ꘠)╭∩╮";

let symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "[", "]", "{", "}"];
let is_index = 0;
let body = document.querySelector(".mess");
let interval = setInterval(() => {
  if (is_index < letter.length) {
    let text = letter.slice(0, is_index + 1);
    if (is_index < letter.length - 1) {
      text += symbols[Math.floor(Math.random() * symbols.length)];
    }
    body.textContent = text;
    is_index++;
  } else {
    clearInterval(interval);
  }
}, 100);
