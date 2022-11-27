import './css/styles.scss'
import { SESSION_TIME_SECONDS } from './ts/constants'
import { buttonStart } from './ts/domElements'
import { initGame } from './ts/initGame'
import { startGame } from './ts/startGame'
import { stopGame } from './ts/stopGame'
import { Timer } from './ts/timer'
import { callbackStack } from './ts/utils'

const timer = new Timer(SESSION_TIME_SECONDS)

initGame(timer)

buttonStart.addEventListener('click', () => {
  initGame(timer)
  buttonStart.disabled = true
  callbackStack([() => startGame(timer), stopGame])
})
