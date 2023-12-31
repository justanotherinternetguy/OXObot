var selection = new RegionSelection();
this.charColor = "#00AA00";
this.color = "rgba(0, 0, 255, 0.1)";
this.tiled = false;
function cursorToCoords(tile_x, tile_y, char_x, char_y) {
  return [tile_x * 16 + char_x, tile_y * 8 + char_y];
}
selection.onselection(function (a, b, c, d) {
  //   console.log(a, b, c, d);
  var [x1, y1] = cursorToCoords(...a);
  var [x2, y2] = cursorToCoords(...b);
  var loc = a;
  for (let i = y1; i <= y2; i++) {
    for (let j = x1; j <= x2; j++) {
      writeCharToXY(" ", 0x000000, j, i);
    }
  }
});

w.on("keyDown", function (e) {
  if (checkKeyPress(e, "CTRL+z")) {
    selection.startSelection();
  }
});
w.setFlushInterval(0);
