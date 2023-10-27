import 'phaser'
import {Game} from './phaser/game'
import {GameConfig} from './phaser/config'

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      gameSetup() {
        const game = new Game(GameConfig);
      }
    }
  }
})
