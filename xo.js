window.onload = function () {
  modalHandler();
};

const o_svs_str = `<svg  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24ZM24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14Z" fill="#333333"></path>
</svg>`;
const x_svs_str = `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
version="1.1"
id="Layer_1"
x="0px"
y="0px"
width="121.31px"
height="122.876px"
viewBox="0 0 121.31 122.876"
enable-background="new 0 0 121.31 122.876"
xml:space="preserve"
>
<g>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
  />
</g>
</svg>`;
const markers = ["o", "x"];
const svgs = [o_svs_str, x_svs_str];
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
  if (isPadFull(pad)) {
    return 1;
  } else {
    do {
      chois = Math.floor(Math.random() * 10);
    } while (pad[chois] !== null);
    console.log(chois, "o");
    pad[chois] = "o";
    console.log(pad, "o");
  }
}

function gamer_x(pad, index) {
  const chois = index;
  pad[chois] = "x";
  //     do {
  //     chois = Math.floor(Math.random() * 10);
  //   } while (pad[chois] !== null);
  //   console.log(chois, "x");
  //   pad[chois] = "x";
  console.log(pad, "x");
}
function isPadFull(pad) {
  let counter = 0;
  for (let i = 0; i < pad.length; i++) {
    const element = pad[i];
    if (!!element) {
      counter++;
    }
  }
  return counter === 9;
}

function isEnd(pad) {
  End = false;

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
//Game();
//console.log(arr.filter((el) => !el));

const pad = Array(9).fill(null);
let isEndGame = false;
let winner = "";
function f(e) {
  //this is x turn

  if (isEndGame) {
    winnerMoalShow(winner);
    e.preventDefault();
    console.log(`finisheddd  ${winner} wins the game`);
  } else {
    let ischecked = e.target.hasAttribute("checked");
    console.log(ischecked);
    if (!ischecked) {
      console.log(e.target.nextElementSibling);
      e.target.nextElementSibling.innerHTML = svgs[1];
      index = e.target.parentElement.parentElement.id;
      console.log(index);
      e.target.setAttribute("checked", "checked");

      gamer_x(pad, index);
      isEndGame = isEnd(pad);
      if (!isEndGame && isPadFull(pad)) {
        isEndGame = true;
        winner = "NO ONE";
        winnerMoalShow(winner);
        return winner;
      }
      if (isEndGame) {
        winner = "X";
        winnerMoalShow(winner);
        return winner;
      }
      gamer_o(pad);
      update_Dom(pad);
      isEndGame = isEnd(pad);
      if (!isEndGame && isPadFull(pad)) {
        isEndGame = true;
        winner = "NO ONE";
        winnerMoalShow(winner);
        return winner;
      }
      if (isEndGame) {
        winner = "O";
        winnerMoalShow(winner);
        return winner;
      }
    } else {
      e.preventDefault();
    }
  }
}

function update_Dom(pad) {
  console.log(pad);

  for (let i = 0; i < pad.length; i++) {
    const item = pad[i];
    if (item === "o") {
      const itemELM = document.getElementById(`${i}`);
      console.log(itemELM.children[0].children[0]);

      itemELM.children[0].children[0].nextElementSibling.innerHTML = o_svs_str;
      itemELM.children[0].children[0].setAttribute("checked", "checked");
    }
  }

  //   pad.foreach((item, i) => {
  //     if (item === "x") {
  //       const itemELM = querySelector(`#${i}`);
  //       console.log(itemELM);
  //     }
  //   });
}

//update_Dom(["x", "o", "x", "o", "x", "o", "o", null, "x"]);

function refreshHandler(event) {
  location.reload();
}

function markerchangeHandler(event) {
  refreshHandler(event);
}

function modalHandler() {
  modal = document.querySelector(".modal__card__parent");
  console.log(modal);
  modal.style.backgroundColor = "rgba(128, 128, 128, 0.434)";
  modal.style.display = "block";
}
function modalDismissHandler(event) {
  modal = document.querySelector(".modal__card__parent");
  console.log(modal);
  modal.style.display = "none";
}

function winnerMoalShow(winner) {
  modal = document.querySelector(".modal__card__parent");
  console.log(modal);
  modal.style.backgroundColor = "#12a7326b";
  MESSAGE = document.querySelector(".modal__card__message");
  MESSAGE.innerText = "Player " + winner + " wines the game...";
  modal.style.display = "block";
}
