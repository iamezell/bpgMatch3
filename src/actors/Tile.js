
export default class Tile extends Phaser.Sprite{

  constructor(state, x, y, image){
    super(state.game, x, y, image);
    this.game = state.game;
    this.state = state;
    this.anchor.setTo(0.5, 0.5);


  }

  add(){
    this.game.add.existing(this);
  }

}
