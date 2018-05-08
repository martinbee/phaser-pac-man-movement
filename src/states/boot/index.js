// Boot State: general game settings are defined, and the assets of the preloading
// screen are loaded (example the loading bar). Nothing is shown to the user.
// Should start preload state in create

import Phaser from 'phaser';

export default {
  preload() {
    // assets for preload state
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('preloadBar', 'assets/images/preload-bar.png');
  },

  create() {
    // loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    // scaling options (REFACTOR INTO WEBPACK??)
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 240;
    this.scale.minHeight = 170;
    this.scale.maxWidth = 2880;
    this.scale.maxHeight = 1920;

    // have the game centered horizontally
    this.scale.pageAlignHorizontally = true;

    // physics system for movement
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  },
};
