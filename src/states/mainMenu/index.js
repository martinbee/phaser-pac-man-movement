// MainMenu State: your game’s welcome screen. After the preload state, all the
// game images are already loaded into the memory, so they can quickly accessed.
// Should start game state at some point

export default {
  create() {
    const {
      width,
      height,
    } = this.game;
    //show the space tile, repeated
    //this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

    //give it speed in x
    //this.background.autoScroll(-20, 0);
    const mainText = 'Tap to begin';
    const mainStyle = { font: '30px Arial', fill: '#fff', align: 'center' };
    const mainContent = this.game.add.text(width / 2, height / 2, mainText, mainStyle);
    mainContent.anchor.set(0.5);
  },

  update() {
    if (this.game.input.activePointer.justPressed()) this.game.state.start('Game');
  },
};
