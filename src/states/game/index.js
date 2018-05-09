// Game State: the actual game where the FUN takes place.

export default {
  create() {
    this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');

    // player
    this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'playerShip');
    this.player.anchor.setTo(0.5);
    this.player.scale.setTo(2);

    // player animations
    this.player.animations.add('fly', [0, 1, 2, 3], 5, true);
    this.player.animations.play('fly');

    // player initial score
    this.playerScore = 0;

    //enable player physics
    this.game.physics.arcade.enable(this.player);
    this.playerSpeed = 120;
    this.player.body.collideWorldBounds = true;

    // camera
    this.game.camera.follow(this.player);

    // audio
    this.explosionSound = this.game.add.audio('explosion');
    this.collectSound = this.game.add.audio('collect');
  },
  update() {
    if (this.game.input.activePointer.justPressed()) {
      // move on the direction of the input
      this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    }
  },
};
