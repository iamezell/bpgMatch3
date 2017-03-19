import Tile from '../actors/Tile';

export default class Board {
  constructor(state){
    this.state = state;
    this.game = state.game;
    this.numColumns;
    this.numRows;
    this.tileArray;
    this.grid = [];

  }

  create() {
    let numRows = this.numRows;
    let numColumns = this.numColumns;
    let tileArray = this.tileArray;
    let grid = this.grid;
    let state = this.state;
    let squareBitmap = this.game.add.bitmapData(40, 40);
    let FoodArray = [];
    squareBitmap.ctx.fillStyle = '#fff';
    squareBitmap.ctx.fillRect(0, 0, 40, 40);
    let tile  = new Tile(this.state, 150, 150, squareBitmap);
    tile.add();
    let request = new XMLHttpRequest;
    request.addEventListener("load", function(event){
					var object = JSON.parse(this.response);
					console.log(object);
					numColumns = object.tiles.length;
					numRows = object.tiles[0].length;
				  tileArray = object.tiles;


          console.log('this is the grid', tileArray);

					// this.gameState = "first"
		});
		request.open("GET", "/hotsauce/level");
		request.send();
    

  }
}
