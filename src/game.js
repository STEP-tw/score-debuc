const Game = function(noOfRows,noOfCols){
    this.noOfRows = noOfRows;
    this.noOfCols = noOfCols;
    this.snake = undefined;
    this.food = undefined;
    this.score = 0;
}

Game.prototype.createFood = function(){
    this.food=generateRandomPosition(this.noOfCols,this.noOfRows);
}

Game.prototype.createSnake = function(){
    let tail=new Position(12,10,"east");
    let body=[];
    body.push(tail);
    body.push(tail.next());
    let head=tail.next().next();

    this.snake = new Snake(head,body);
}

Game.prototype.increaseScore = function(){
    this.score+=10;
}

Game.prototype.getSnake = function(){
    return this.snake;
}

Game.prototype.getFood = function(){
    return this.food;
}

Game.prototype.getScore = function(){
    return this.score;
}
