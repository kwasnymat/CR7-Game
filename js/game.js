import { Ball } from "./ball";
import { Cris } from "./cris";

class Game {
    constructor(board, cris, ball, score, index) {

        this.board = document.querySelectorAll('#board div');
        this.cris = new Cris();
        this.ball = new Ball();
        this.score = 0;
        this.index = (x, y) => {
            return x + (y * 10);
        }
    }

    showCris() {

        if (document.querySelector('.cris') != null && document.querySelector('.cris') != 'undefined') {
            this.hideVisibleCris();
        }
        this.board[this.index(this.cris.x, this.cris.y)].classList.add('cris');
    }

    showBall() {
        this.board[this.index(this.ball.x, this.ball.y)].classList.add('ball');
    }

    startGame (){
        this.idSetInterval = setInterval(()=> {
            this.moveCris()}, 250);
    }
    moveCris() {
        if (this.cris.direction === "right") {
            this.cris.x += 1;
        } else if (this.cris.direction === "left") {
            this.cris.x -= 1;
        } else if (this.cris.direction === "up") {
            this.cris.y -= 1;
        } else if (this.cris.direction === "down") {
            this.cris.y += 1;
        }
        this.gameOver();
        this.showCris();
        this.checkBallCollision();
    }

    hideVisibleCris() {
        const visibleCris = document.querySelector('.cris').classList.remove('cris');
    }

    turnCris(event) {

        switch (event.which) {
            case 37:
                this.cris.direction = 'left';
                break;
            case 38:
                this.cris.direction = 'up';
                break;
            case 39:
                this.cris.direction = 'right';
                break;
            case 40:
                this.cris.direction = 'down';
                break;
        }
    }
    checkBallCollision (){

        if(this.cris.x == this.ball.x && this.cris.y == this.ball.y){
            document.querySelector('.ball').classList.remove('ball');
            this.score++;
            document.querySelector('#ball-sound').play();
            document.querySelector('#score strong').innerText = this.score;
            this.ball = new Ball();
            this.showBall();
        }
    }
    gameOver (){

        if(this.cris.x < 0 || this.cris.x > 9 || this.cris.y < 0 || this.cris.y > 9) {
            document.querySelector('#over').classList.remove('invisible');
            document.querySelector('p span').innerText = this.score;
            document.querySelector('#game-over').play();
            return clearInterval(this.idSetInterval);
            this.hideVisibleCris();

        }
    }
}

export { Game };