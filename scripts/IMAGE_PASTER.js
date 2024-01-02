// RUN OBTAIN_COLOR.PY FIRST, PIPE THE OUPTUT OF PY SCRIPT INTO MODAL

function cursorToCoords(tile_x, tile_y, char_x, char_y) {
  return [tile_x * 16 + char_x, tile_y * 8 + char_y];
}

function draw(vals, tileX, tileY, charX, charY) {
  var n = vals.length;
  [sx, sy] = cursorToCoords(tileX, tileY, charX, charY);
  // console.log(sx, sy);
  for (let i = 0; i < n; i++) {
    writeCharToXY("█", "0x"+vals[i][0].toString(16), vals[i][1] + sx, vals[i][2] + sy);
  }
}

w.on("mouseDown", (e) => {
  let modal = new Modal();

  modal.createForm();
  modal.setFormTitle("testing\n");
  modal.setMaximumSize(360, 300);
  let entry = modal.addEntry("pixel vals", "text");
  modal.onSubmit(function () {
    let valsString = entry.input.value;

    // Convert the input string to a 2D array of integers
    let vals = JSON.parse(valsString);

    // Ensure vals is a valid 2D array
    if (Array.isArray(vals) && vals.every(row => Array.isArray(row) && row.every(Number.isInteger))) {
      modal.close();
      draw(vals, e.tileX, e.tileY, e.charX, e.charY);
    } else {
      alert("Invalid input. Please enter a valid 2D array of integers.");
    }
  });
  modal.open();
});