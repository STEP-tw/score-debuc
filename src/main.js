const ROWS = 60;
const COLS = 120;

let game = new Game(ROWS,COLS);

let animator=undefined;

const animateSnake=function() {
  let snake = game.getSnake();
  let oldHead=snake.getHead();
  let oldTail=snake.move();
  let head=snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(head.isSameCoordAs(game.getFood())) {
    snake.grow();
    game.increaseScore();
    updateScore(game.getScore());
    game.createFood();
    drawFood(game.getFood());
  }
}

const changeSnakeDirection=function(event) {
  let snake = game.getSnake();
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const startGame=function() {
  game.createSnake();
  drawGrids(ROWS,COLS);
  drawSnake(game.getSnake());
  game.createFood();
  drawFood(game.getFood());
  updateScore(game.getScore());
  addKeyListener();
  animator=setInterval(animateSnake,100);
}

window.onload=startGame;
