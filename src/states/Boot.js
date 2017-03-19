import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#EDEEC9'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)

    if (this.game.device.desktop)
    {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.setMinMax(480, 260, 1024, 768)
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true
    }
    else
    {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.setMinMax(480, 260, 1024, 768)
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true
      this.scale.forceOrientation(true, false)
    }
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
    this.load.image('game_title', './assets/images/game_title.png')
    this.load.image('bean_blue', './assets/images/bean_blue.png')
    this.load.image('bean_green', './assets/images/bean_green.png')
    this.load.image('bean_orange', './assets/images/bean_orange.png')
    this.load.image('bean_pink', './assets/images/bean_pink.png')
    this.load.image('bean_purple', './assets/images/bean_purple.png')
    this.load.image('bean_red', './assets/images/bean_red.png')
    this.load.image('bean_white', './assets/images/bean_white.png')
    this.load.image('bean_yellow', './assets/images/bean_yellow.png')
    
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Splash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
