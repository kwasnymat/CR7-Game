import { Game } from './game';

document.addEventListener("DOMContentLoaded",function() {

    document.querySelector('#start button').addEventListener('click', function(){
        let game = new Game();
        game.showCris();
        game.showBall();
        game.startGame();

        document.addEventListener('keydown', event => {
            game.turnCris(event);
        });

        document.querySelector('#start').classList.add('invisible');
    });

    document.querySelector('#over button').addEventListener('click', function(){

        document.querySelector('#score strong').innerText = 0;
        document.querySelector('.ball').classList.remove('ball')

        let game = new Game();
        game.showCris();
        game.showBall();
        game.startGame();

        document.addEventListener('keydown', event => {
            game.turnCris(event);
        });

        document.querySelector('#over').classList.add('invisible');
    });

});