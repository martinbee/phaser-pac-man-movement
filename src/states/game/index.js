// Game State: the actual game where the FUN takes place.
import Phaser from 'phaser';

export default {
  create() {
    // player initial score
    this.playerScore = 0;

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('tiles', 'tiles');

    this.layer = this.map.createLayer('Tile Layer 1');

    this.map.setCollision(20, true, this.layer);

    this.car = this.add.sprite(48, 48, 'car');
    this.car.anchor.set(0.5);
    this.physics.enable(this.car);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.move(Phaser.DOWN);

    // audio
    this.explosionSound = this.game.add.audio('explosion');
    this.collectSound = this.game.add.audio('collect');

    // show score
    this.showLabels();
  },

  update() {
    this.physics.arcade.collide(this.car, this.layer);
  },

  // handle end state by restarting to menu
  gameOver() {
    // pass it the score as a parameter
    this.game.state.start('MainMenu', true, false, this.playerScore);
  },

  // collectibles
  //generateCollectibles() {
    //this.collectibles = this.game.add.group();

    ////enable physics in them
    //this.collectibles.enableBody = true;
    //this.collectibles.physicsBodyType = Phaser.Physics.ARCADE;

    ////phaser's random number generator
    //const numCollectibles = this.game.rnd.integerInRange(5, 10);
    //let collectible;

    //for (let i = 0; i < numCollectibles; i += 1) {
      ////add sprite
      //collectible = this.collectibles.create(this.game.world.randomX, this.game.world.randomY, 'power');
      //collectible.animations.add('fly', [0, 1, 2, 3], 5, true);
      //collectible.animations.play('fly');
    //}
  //},
  //collect(player, collectible) {
    ////play collect sound
    //this.collectSound.play();

    ////update score
    //this.playerScore += 1;
    //this.scoreLabel.text = this.playerScore;

    ////remove sprite
    //collectible.kill();
  //},

  // score
  showLabels() {
    const {
      add,
      game: {
        width,
        height,
      },
    } = this;

    const text = '0';
    const style = { font: '20px Arial', fill: '#fff', align: 'center' };

    this.scoreLabel = add.text(width - 50, height - 50, text, style);
    this.scoreLabel.fixedToCamera = true;
  },
};
