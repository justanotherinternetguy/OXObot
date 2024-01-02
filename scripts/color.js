function cursorToCoords(tile_x, tile_y, char_x, char_y) {
  return [tile_x * 16 + char_x, tile_y * 8 + char_y];
}

function draw(vals, tileX, tileY, charX, charY) {
  var n = vals.length;
  [sx, sy] = cursorToCoords(tileX, tileY, charX, charY);
  // console.log(sx, sy);
  for (let i = 0; i < n; i++) {
    // writeCharToXY("a", "0xff0000", vals[i][1], vals[i][2]);
    console.log(vals[i]);
  }
}

w.on("mouseDown", (e) => {
  // writeCharToXY(
  //   "█",
  //   0xff0000,
  //   ...cursorToCoords(e.tileX, e.tileY, e.charX, e.charY)
  // );
  let modal = new Modal();

  modal.createForm();
  modal.setFormTitle("testing\n");
  modal.setMaximumSize(360, 300);
  let entry = modal.addEntry("pixel vals", "text");
  modal.onSubmit(function () {
    let vals = entry.input.value;
    // console.log(val);
    modal.close();
    draw(vals, e.tileX, e.tileY, e.charX, e.charY);
  });
  modal.open();
});
