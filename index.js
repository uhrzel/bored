// dunno
let im = "Wala lang po talaga akong magawa and naiingit lang po talaga ako dun sa post na \"month-sorry\" eme hayyst hahaha sana all nalang talaga. Neeway hahaha happy new year po! talon kayo sa new year ah or ano hahaah mag hatid kayo ng lumpia sa bahay namen send ko nalang loc hahaah. Sige-sige bye!!! （￣︶￣）↗";

// random characters
let random_chars = ['@', '!', '#', '%', '$', '^', '&', '*', '(', ')', ']', '[', '1', '0'];

$(function() {

    const window_width = window.innerWidth;
    const window_height = window.innerHeight;

    let node = $(".mess");
    let im_index = 0;
    let current_len = ""
    let is_done = false;
    
    let interval_id = setInterval(()=> {
        if (im_index != im.length) {
            current_len += im[im_index];
            for(let i = 0; i < 30; i++) {
                if (im_index == im.length-1)
                    node.text(current_len);
                else 
                    node.text(current_len + random_chars[Math.floor(Math.random() * random_chars.length)]);
            }
        } else {
            node.remove();
            $('body').css('display: block;');
            clearInterval(interval_id);
            is_done = true;
        }
        im_index++;
    }, 100);

    
});