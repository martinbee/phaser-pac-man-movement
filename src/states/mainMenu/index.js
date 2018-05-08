// MainMenu State: your game’s welcome screen. After the preload state, all the
// game images are already loaded into the memory, so they can quickly accessed.
// Should start game state at some point

export default {
  preload() {
    this.load.image('logo', './assets/images/phaser.png');
  },
  create() {
    const logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');

    logo.anchor.setTo(0.5, 0.5);
    console.log(this);
  },
  update() {

  },
};
