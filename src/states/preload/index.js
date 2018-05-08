// Preload State: the game assets (images, spritesheets, audio, textures, etc)
// are loaded into the memory (from the disk). The preloading screen is shown to
// the user, which usually includes a loading bar to show the progress.
// Should start main menu state in create

export default {
  preload() {
    this.load.image('logo', './assets/images/phaser.png');
  },
  create() {
    const logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');

    logo.anchor.setTo(0.5, 0.5);
    console.log(this);
  },
};
