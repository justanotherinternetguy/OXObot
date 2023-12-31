let news_location = [-1, -2, 0, 2];
let news_width = 32;

let news_text = "put your news text here! it can be as long as you want";
let news_color = 0xcc241d;

function writeStringAt(s, color, loc) {
  for (const ch of s) {
    writeCharTo(ch, color, ...loc, true);
    loc = coordinateAdd(...loc, 0, 0, 1, 0);
  }
}

let text_pos = -news_width;
setInterval(() => {
  const text = news_text.padEnd(news_width, " ");
  let subsect = text.slice(Math.max(0, text_pos), text_pos + news_width);

  text_pos += 1;
  if (text_pos > news_text.length) text_pos = -news_width;

  subsect =
    text_pos < 0
      ? subsect.padStart(news_width, " ")
      : subsect.padEnd(news_width, " ");

  writeStringAt(subsect, news_color, news_location);
}, 100);

w.setFlushInterval(0);
