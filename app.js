// alert("salom");

const game = ["Rock", "Paper", "Scissors"];

function playGame(user) {
  const computerChoice = Math.floor(Math.random() * 3);
}

function randomChoose(user, computer) {
  switch (user) {
    case 0:
      switch (computer) {
        case 0:
          return "draw";
        case 1:
          return "Computer wins!";
        case 2:
          return "You win!";
      }
      break;
    case 1:
      switch (computer) {
        case 0:
          return "You win!";
        case 1:
          return "Draw";
        case 2:
          return "Computer wins!";
      }
      break;
    case 2:
      switch (computer) {
        case 0:
          return "Computer wins!";
        case 1:
          return "You win!";
        case 2:
          return "Draw";
      }
      break;
  }
}
