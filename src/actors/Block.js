export default class Block extends Phaser.Sprite{
  constructor(state, x, y, image, data){
    super(state.game, x, y, image, data);
    this.game = state.game;

    this.state = state;
    this.row = data.row;
    this.col = data.col;
    this.anchor.setTo(0.5);

    //listen for input
    this.inputEnabled = true;
    this.events.onInputDown.add(state.pickBlock, this.state);
  }

}
