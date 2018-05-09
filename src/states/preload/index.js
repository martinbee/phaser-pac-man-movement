// Preload State: the game assets (images, spritesheets, audio, textures, etc)
// are loaded into the memory (from the disk). The preloading screen is shown to
// the user, which usually includes a loading bar to show the progress.
// Should start main menu state in create

export default {
  preload() {
    // load logo
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 20, 'logo');
    this.splash.anchor.setTo(0.5);

    // load preload bar
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 200, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);

    // fix this preload bar (hard to test with few files)
    this.load.setPreloadSprite(this.preloadBar);

    // load all other game assets (sounds, sprites, images, etc.)
    this.load.image('space', 'assets/images/space.png');
    this.load.image('rock', 'assets/images/rock.png');
    this.load.spritesheet('playerShip', 'assets/images/player.png', 12, 12);
    this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
    this.load.image('playerParticle', 'assets/images/player-particle.png');

    this.load.audio('collect', 'assets/audio/collect.ogg');
    this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create() {
    this.state.start('MainMenu');
  },
};
