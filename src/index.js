import 'pixi';
import 'p2';
import Phaser from 'phaser';

import gameState from './states';

// config
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

game.state.add('GameState', gameState);
game.state.start('GameState');
