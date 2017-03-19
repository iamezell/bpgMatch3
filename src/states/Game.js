/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Board from '../actors/Board'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let myBoard = new Board(this);
    myBoard.create();

    console.debug('game started');
  }

  // render () {
  //   if (__DEV__) {
  //     this.game.debug.spriteInfo(this.mushroom, 32, 32)
  //   }
  // }
}
