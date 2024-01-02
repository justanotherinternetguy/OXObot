// Event listeners for mouse down and up
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);

function cursorToCoords(tile_x, tile_y, char_x, char_y) {
  return [tile_x * 16 + char_x, tile_y * 8 + char_y];
}

const GROUND_LENGTH = 20;

function drawGround(x, y) {
  for (let i = x; i <= x + GROUND_LENGTH; i++) {
    writeCharToXY("_", 0x000000, i, y);
  }
}

// █

// MIGHT NEED TO SWITCH TO ARRAY OF VALUES fuck.

var coordinates = []; // 2d, (x, y) pairs
const ROWS = 2;
const COLS = 4;

function initCube(cube_x, cube_y) {
  for (let i = cube_x; i < cube_x + COLS; i++) {
    const row = [];
    for (let j = cube_y; j < cube_y + ROWS; j++) {
      // Push an array with x and y coordinates into the row
      row.push([i, j]);
    }
    // Push the row into the main array
    coordinates.push(row);
  }

  return coordinates;
}

function drawCube(coordinates) {
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = 0; j < coordinates[i].length; j++) {
      writeCharToXY("█", 0x000000, coordinates[i][j][0], coordinates[i][j][1]);
      // console.log(...coordinates[i][j]);
    }
  }
}

function eraseCube(coordinates) {
  for (let i = 0; i < coordinates.length; i++) {
    for (let j = 0; j < coordinates[i].length; j++) {
      writeCharToXY(
        " ",
        0x000000,
        coordinates[i][j][0] + 1,
        coordinates[i][j][1] + 1
      );
      // console.log(...coordinates[i][j]);
    }
  }
}

// function initCube(cube_x, cube_y) {
//   for (let i = cube_y; i > cube_y - 2; i--) {
//     for (let j = cube_x; j < cube_x + 4; j++) {
//       writeCharToXY("█", 0x000000, j, i);
//     }
//   }
// }

w.on("mouseDown", (e) => {
  //   console.log(e.tileX, e.tileY, e.charX, e.charY);
  handleMouseDown(e);
});

w.on("mouseUp", (e) => {
  //   console.log(e.tileX, e.tileY, e.charX, e.charY);
  handleMouseUp(e);
});

// Boolean flag to track mouse state
let isMouseDown = false;

// Function to handle mouse down event
function handleMouseDown(e) {
  isMouseDown = true;
  var [x, y] = cursorToCoords(e.tileX, e.tileY, e.charX, e.charY);
  drawGround(x, y);
  var cube_x = x + Math.floor(GROUND_LENGTH / 2);
  var cube_y = y - 1;
  initCube(cube_x, cube_y);
  while (isMouseDown) {
    console.log("e");
    drawCube(coordinates);
  }
  console.log("Mouse down");
}

// Function to handle mouse up event
function handleMouseUp(e) {
  isMouseDown = false;
  console.log("Mouse up");
}

w.setFlushInterval(0);
