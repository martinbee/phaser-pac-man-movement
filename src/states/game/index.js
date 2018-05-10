// Game State: the actual game where the FUN takes place.
import Phaser from 'phaser';

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

    // generate obstables and collectibles
    this.generateAsteriods();
    this.generateCollectibles();

    // audio
    this.explosionSound = this.game.add.audio('explosion');
    this.collectSound = this.game.add.audio('collect');

    // show score
    this.showLabels();
  },

  update() {
    // catch user clicking mouse event
    if (this.game.input.activePointer.justPressed()) {
      // move on the direction of the input
      this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    }

    //collision between player and asteroids
    this.game.physics.arcade.collide(this.player, this.asteroids, this.hitAsteroid, null, this);

    //overlapping between player and collectibles (overlap does not affect player physics)
    this.game.physics.arcade.overlap(this.player, this.collectibles, this.collect, null, this);
  },

  // handle end state by restarting to menu
  gameOver() {
    // pass it the score as a parameter
    this.game.state.start('MainMenu', true, false, this.playerScore);
  },

  // utility methods below
  generateAsteriods() {
    this.asteroids = this.game.add.group();

    // enable physics in asteroids
    this.asteroids.enableBody = true;
    this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;

    // phaser's random number generator
    const numAsteroids = this.game.rnd.integerInRange(10, 20);
    let asteriod;

    for (let i = 0; i < numAsteroids; i += 1) {
      // add sprite
      asteriod = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
      asteriod.scale.setTo(this.game.rnd.integerInRange(10, 40) / 10);

      // physics properties
      asteriod.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
      asteriod.body.velocity.y = this.game.rnd.integerInRange(-20, 20);
      asteriod.body.immovable = true;
      asteriod.body.collideWorldBounds = true;
    }
  },
  hitAsteroid() {
    //play explosion sound
    this.explosionSound.play();

    //player explosion will be added here
    const emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
    emitter.makeParticles('playerParticle');
    emitter.minParticleSpeed.setTo(-200, -200);
    emitter.maxParticleSpeed.setTo(200, 200);
    emitter.gravity = 0;
    emitter.start(true, 1000, null, 100);

    this.player.kill();

    this.game.time.events.add(800, this.gameOver, this);
  },

  // collectibles
  generateCollectibles() {
    this.collectibles = this.game.add.group();

    //enable physics in them
    this.collectibles.enableBody = true;
    this.collectibles.physicsBodyType = Phaser.Physics.ARCADE;

    //phaser's random number generator
    const numCollectibles = this.game.rnd.integerInRange(5, 10);
    let collectible;

    for (let i = 0; i < numCollectibles; i += 1) {
      //add sprite
      collectible = this.collectibles.create(this.game.world.randomX, this.game.world.randomY, 'power');
      collectible.animations.add('fly', [0, 1, 2, 3], 5, true);
      collectible.animations.play('fly');
    }
  },
  collect(player, collectible) {
    //play collect sound
    this.collectSound.play();

    //update score
    this.playerScore += 1;
    this.scoreLabel.text = this.playerScore;

    //remove sprite
    collectible.kill();
  },

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
