import './css/styles.scss'
import { SESSION_TIME_SECONDS } from './ts/constants'
import { buttonStart } from './ts/domElements'
import { initGame } from './ts/initGame'
import { startGame } from './ts/startGame'
import { stopGame } from './ts/stopGame'
import { Timer } from './ts/timer'

initGame()

const timer = new Timer({
  callbackQueue: {
    queue: [startGame, stopGame],
    delaySeconds: SESSION_TIME_SECONDS,
  },
})

buttonStart.addEventListener('click', timer.runCallbackQueue)
