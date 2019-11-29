import './styles/game.css';
import Game from './partials/Game';

// create a game instance
document.getElementById('game').append("Hello world");
const game = new Game('game', 1024, 512);

console.log(game);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
