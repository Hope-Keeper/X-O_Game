function isEqual(i, j, arr) {
  return (
    arr[i + 0 * j] === arr[i + 1 * j] &&
    arr[i + 0 * j] === arr[i + 2 * j] &&
    !!arr[i + 0 * j] &&
    !!arr[i + 1 * j] &&
    !!arr[i + 2 * j]
  );
}

function Game(params) {
  pad = Array(9).fill(null);

  isEndGame = false;

  do {
    /*if (pad.filter((el) => !el).length === 0) {
        return pad;
      }*/
    gamer_o(pad);
    isEndGame = isEnd(pad);
    if (isEndGame) return pad;

    gamer_x(pad);
    isEndGame = isEnd(pad);
    if (isEndGame) return pad;
  } while (!isEndGame);
}
function gamer_o(pad) {
  do {
    chois = Math.floor(Math.random() * 10);
  } while (pad[chois] !== null);
  console.log(chois, "o");
  pad[chois] = "o";
  console.log(pad, "o");
}

function gamer_x(pad) {
  do {
    chois = Math.floor(Math.random() * 10);
  } while (pad[chois] !== null);
  console.log(chois, "x");
  pad[chois] = "x";
  console.log(pad, "x");
}
function isEnd(pad) {
  End = false;
  let counter = 0;
  for (let i = 0; i < pad.length; i++) {
    const element = pad[i];

    if (!!element) {
      counter++;
    }
  }

  if (counter === 9) {
    return true;
  }
  // سطر های یکسان؟
  for (let i = 0; i < 9; i += 3) {
    End = isEqual(i, 1, pad);
    if (End) {
      return End;
    }
  }
  //ستون یکسان؟؟؟
  for (let i = 0; i < 3; i++) {
    End = isEqual(i, 3, pad);
    if (End) {
      return End;
    }
  }
  //قطر اصلی

  End = isEqual(0, 4, pad);
  if (End) {
    return End;
  }
  //قطر فرعی
  End = isEqual(2, 2, pad);
  if (End) {
    return End;
  }

  return End;
}
arr = ["o", null, null, null, null, null, null, null, null];
e = isEqual(3, 1, arr);
//console.log(e);
Game();
//console.log(arr.filter((el) => !el));
