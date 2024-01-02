function cursorToCoords(tile_x, tile_y, char_x, char_y) {
  return [tile_x * 16 + char_x, tile_y * 8 + char_y];
}
w.on("mouseDown", (e) => {
  //   console.log(e.tileX, e.tileY, e.charX, e.charY);
  console.log(cursorToCoords(e.tileX, e.tileY, e.charX, e.charY));
});
