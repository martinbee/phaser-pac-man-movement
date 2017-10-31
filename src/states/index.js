// Add custom game loop logic by editing the below methods
export default {
  preload() {
    this.load.image('logo', './assets/images/phaser.png');
  },
  create() {
    const logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');

    logo.anchor.setTo(0.5, 0.5);
  },
  update() {

  },
};
