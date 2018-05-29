// Preload State: the game assets (images, spritesheets, audio, textures, etc)
// are loaded into the memory (from the disk). The preloading screen is shown to
// the user, which usually includes a loading bar to show the progress.
// Should start main menu state in create
import Phaser from 'phaser';

export default {
  preload() {
    const {
      game,
      add,
      load,
    } = this;

    const { centerX, centerY } = game.world;

    // load logo
    this.splash = add.sprite(centerX, centerY - 20, 'logo');
    this.splash.anchor.setTo(0.5);

    // load preload bar
    this.preloadBar = add.sprite(centerX, centerY + 200, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);

    // fix this preload bar (hard to test with few files)
    load.setPreloadSprite(this.preloadBar);

    // load all other game assets (sounds, sprites, images, etc.)
    load.image('car', 'assets/images/car.png');
    load.image('dot', 'assets/images/dot.png');
    load.image('pacman', 'assets/images/pacman.png');
    load.image('pacmanTiles', 'assets/images/pacman-tiles.png');
    load.image('tiles', 'assets/images/tiles.png');
    load.tilemap('map', 'assets/tilemaps/maze.json', null, Phaser.Tilemap.TILED_JSON);

    load.audio('collect', 'assets/audio/collect.ogg');
    load.audio('explosion', 'assets/audio/explosion.ogg');
  },

  create() {
    // start main menu state
    this.state.start('MainMenu');
  },
};
