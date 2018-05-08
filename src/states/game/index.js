// Game State: the actual game where the FUN takes place.

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
