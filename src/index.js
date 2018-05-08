import 'pixi';
import 'p2';
import Phaser from 'phaser';

import {
  bootState,
  preloadState,
  mainMenuState,
  gameState,
} from './states';

// game config
const {
  GAME_WIDTH,
  GAME_HEIGHT,
  GAME_RENDERER,
  GAME_ENTRY_POINT,
} = process.env.gameSettings;

const width = GAME_WIDTH || 800;
const height = GAME_HEIGHT || 600;
const renderer = GAME_RENDERER || Phaser.AUTO;
const entryPoint = GAME_ENTRY_POINT || '';

// initialize game
const game = new Phaser.Game(width, height, renderer, entryPoint);

// add game states and start boot
game.state.add('Boot', bootState);
game.state.add('Preload', preloadState);
game.state.add('MainMenu', mainMenuState);
game.state.add('Game', gameState);
game.state.start('Boot');
