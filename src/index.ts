import './css/styles.scss'
import { buttonStart } from './ts/domElements'
import { initGame } from './ts/initGame'
import { startGame } from './ts/startGame'
import { stopGame } from './ts/stopGame'
import { Timer } from './ts/timer'
import { callbackStack } from './ts/utils'

const timer = new Timer()

initGame(timer)

buttonStart.addEventListener('click', () => {
  !timer.isInitState && initGame(timer)
  buttonStart.disabled = true
  callbackStack([() => startGame(timer), stopGame])
})
