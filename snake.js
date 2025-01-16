//Depricted game files

let play;
let context;

let blockSize = 40;

let rows = 20;
let collums = 20;

let foodX = blockSize * Math.floor(Math.random() * collums); // setting a randomized psotion for the initial apple
let foodY = blockSize * Math.floor(Math.random() * rows);

let snakeX = blockSize * 5; // setting the initial position of the snake
let snakeY = blockSize * 5;

let snake = [];

let speedX = 0; //savig the direction of movement
let speedY = 0;

let gameOver = false; // boolean flag to stop the game from updating
let gameStart = false; // boolean flag to signify the start of a game

function setGame() {
    play = document.getElementById("play");
    play.height = rows * blockSize;
    play.width = collums * blockSize;
    context = play.getContext("2d") //allows access to usefull predefined functins

    document.addEventListener("keyup", updateSpeed);

    setInterval(updateGame, 250); //set the interval of updates
}

function updateGame() {
    if (gameOver) {
        return;
    }

    context.fillStyle = 'rgb(68, 255, 0)';
    context.fillRect(0, 0, play.width, play.height);

    context.fillStyle = 'rgb(255,0,0)';
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snake.push([foodX, foodY]);
        foodX = blockSize * Math.floor(Math.random() * collums); // setting a randomized psotion for the initial apple
        foodY = blockSize * Math.floor(Math.random() * rows);
        console.log(snake);
        console.log("Nom");
    }

    for (let i = snake.length - 1; i > 0; i--) { //shift the positiosn of the snake tail
        snake[i] = snake[i - 1];
    }

    context.fillStyle = 'rgb(242, 255, 0)';
    snakeX += speedX * blockSize;//updting snake position
    snakeY += speedY * blockSize;
    if (snakeX < 0 || snakeX >= collums * blockSize || snakeY < 0 || snakeY >= rows * blockSize) {
        gameOver = true;
        alert("Game Over");
    }
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    snake[0] = [snakeX, snakeY];
    for (let i = snake.length - 1; i >= 1; i--) {
        context.fillRect(snake[i][0], snake[i][1], blockSize, blockSize);
    }
}

function updateSpeed(e) {
    let keyPressed = e.key;

    if (keyPressed == " ") {
        gameStart = true;
        gameOver = false;
        snake = [];
        snakeX = blockSize * 5;
        snakeY = blockSize * 5;
        speedX = 0;
        speedY = 0;
    }

    if (gameStart) {
        switch (e.key) {
            case "w":
                if (speedY == 1) {
                    break;
                }
                speedY = -1;
                speedX = 0;
                break;
            case "a":
                if (speedX == 1) {
                    break;
                }
                speedY = 0;
                speedX = -1;
                break;
            case "s":
                if (speedY == -1) {
                    break;
                }
                speedY = 1;
                speedX = 0;
                break;
            case "d":
                if (speedX == -1) {
                    break;
                }
                speedY = 0;
                speedX = 1;
                break;

            case "ArrowUp":
                if (speedY == 1) {
                    break;
                }
                speedY = -1;
                speedX = 0;
                break;
            case "ArrowLeft":
                if (speedX == 1) {
                    break;
                }
                speedY = 0;
                speedX = -1;
                break;
            case "ArrowDown":
                if (speedY == -1) {
                    break;
                }
                speedY = 1;
                speedX = 0;
                break;
            case "ArrowRight":
                if (speedX == -1) {
                    break;
                }
                speedY = 0;
                speedX = 1;
                break;
        }
    }
}
