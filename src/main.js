import Game from './Game';
const game = new Game(1024,768);
import Boot from './states/Boot'
game.state.add('Boot',Boot);
import Preload from './states/Preload'
game.state.add('Preload',Preload);
import MainMenu from './states/MainMenu'
game.state.add('MainMenu',MainMenu);
import PlayGame from './states/PlayGame'
game.state.add('PlayGame',PlayGame);
import GameOver from './states/GameOver'
game.state.add('GameOver',GameOver);
game.state.start('Boot');
