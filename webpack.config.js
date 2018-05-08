const webpack = require('webpack');
const path = require('path');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

const {
  GAME_WIDTH,
  GAME_HEIGHT,
  GAME_RENDERER,
  GAME_ENTRY_POINT,
  PORT,
} = process.env;

const port = PORT || 3000;

module.exports = {
  /**
   * Minimal build setup.
   * Create your app bundle.
   */

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'assets', 'scripts'),
  },

  // set webpack mode
  mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',

  // process.env will not be defined on the window, have to inject properties here
  plugins: [
    new webpack.DefinePlugin({
      'process.env.gameSettings': {
        GAME_WIDTH,
        GAME_HEIGHT,
        GAME_RENDERER,
        GAME_ENTRY_POINT,
      },
    }),
  ],

  /**
   * Minimal development setup.
   * Serves files in ./public folder.
   * Refresh browser automatically when your bundle changes.
   */

  devServer: {
    publicPath: '/assets/scripts/',
    contentBase: path.join(__dirname, 'public'),
    port,
  },

  // extract out pixi and p2 from phaser node module
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
    ],
  },
  resolve: {
    alias: {
      phaser,
      pixi,
      p2,
    },
  },
};
