function player1(playerNumber1) {
  if (playerNumber1 === 1) {
    document.querySelector("img").setAttribute("src", "images/dice1.png");
  }
  if (playerNumber1 === 2) {
    document.querySelector("img").setAttribute("src", "images/dice2.png");
  }
  if (playerNumber1 === 3) {
    document.querySelector("img").setAttribute("src", "images/dice3.png");
  }
  if (playerNumber1 === 4) {
    document.querySelector("img").setAttribute("src", "images/dice4.png");
  }
  if (playerNumber1 === 5) {
    document.querySelector("img").setAttribute("src", "images/dice5.png");
  }
  if (playerNumber1 === 6) {
    document.querySelector("img").setAttribute("src", "images/dice6.png");
  }
}

function player2(playerNumber2) {
  if (playerNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  if (playerNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  if (playerNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  if (playerNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  if (playerNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
  if (playerNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }
}

function checkTheWinner(playerNumber1, playerNumber2) {
  if (playerNumber1 > playerNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
  } else if (playerNumber1 < playerNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!!";
  }
}

var playerNumber1 = Math.floor(Math.random() * 6) + 1;
var playerNumber2 = Math.floor(Math.random() * 6) + 1;
player1(playerNumber1);
player2(playerNumber2);
checkTheWinner(playerNumber1, playerNumber2);
