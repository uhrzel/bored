// dunno
let im =
  "Namamasko po! Mangarol si Arzel! We wish you a merry Christmas We wish you a merry Christmas We wish you a merry Christmas and a happy new year （￣︶￣）↗\n\n GCASH: 09090937257";

// random characters
let random_chars = [
  "@",
  "!",
  "#",
  "%",
  "$",
  "^",
  "&",
  "*",
  "(",
  ")",
  "]",
  "[",
  "1",
  "0",
];

$(function () {
  const window_width = window.innerWidth;
  const window_height = window.innerHeight;

  let node = $(".mess");
  let im_index = 0;
  let current_len = "";
  let is_done = false;

  let interval_id = setInterval(() => {
    if (im_index != im.length) {
      current_len += im[im_index];
      for (let i = 0; i < 30; i++) {
        if (im_index == im.length - 1) node.text(current_len);
        else
          node.text(
            current_len +
              random_chars[Math.floor(Math.random() * random_chars.length)]
          );
      }
    } else {
      node.remove();
      $("body").css("display: block;");
      clearInterval(interval_id);
      is_done = true;
    }
    im_index++;
  }, 100);
});
