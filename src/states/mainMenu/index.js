// MainMenu State: your game’s welcome screen. After the preload state, all the
// game images are already loaded into the memory, so they can quickly accessed.
// Should start game state at some point

export default {
  create() {
    const {
      add,
      game: {
        width,
        height,
      },
      highestScore,
    } = this;
    const centerWidth = width / 2;
    const centerHeight = height / 2;

    //show the space tile, repeated
    this.background = add.tileSprite(0, 0, width, height, 'space');

    //give it speed in x
    this.background.autoScroll(-20, 0);

    // write main menu text
    const mainText = 'Tap to begin';
    const mainStyle = { font: '30px Arial', fill: '#fff', align: 'center' };
    const mainContent = add.text(centerWidth, centerHeight, mainText, mainStyle);
    mainContent.anchor.set(0.5);

    // write highest score
    const highestScoreText = `Highest score: ${highestScore}`;
    const highestScoreStyle = { font: '15px Arial', fill: '#fff', align: 'center' };
    const highestScoreContent = (
      add.text(centerWidth, centerHeight + 50, highestScoreText, highestScoreStyle)
    );
    highestScoreContent.anchor.set(0.5);
  },

  update() {
    if (this.game.input.activePointer.justPressed()) this.game.state.start('Game');
  },

  init(passedScore = 0) {
    // set score to highestScore or passedScore if it was higher
    this.highestScore = this.highestScore || 0;
    this.highestScore = Math.max(passedScore, this.highestScore);
  },
};
