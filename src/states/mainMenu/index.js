// MainMenu State: your game’s welcome screen. After the preload state, all the
// game images are already loaded into the memory, so they can quickly accessed.
// Should start game state at some point

export default {
  create() {
  	//show the space tile, repeated
    //this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');

    //give it speed in x
    //this.background.autoScroll(-20, 0);
    var text = "Tap to begin";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);

    //highest score
    text = "Highest score: "+this.highestScore;
    style = { font: "15px Arial", fill: "#fff", align: "center" };

    var h = this.game.add.text(this.game.width/2, this.game.height/2 + 50, text, style);
    h.anchor.set(0.5);
  },

  update() {
    if (this.game.input.activePointer.justPressed()) this.game.state.start('Game');
  },
};
