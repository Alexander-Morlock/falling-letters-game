import { SESSION_TIME_SECONDS } from './constants'
import { buttonStart, infoTimer } from './domElements'
import { initGame } from './initGame'
import { Timer } from './timer'
import { setTextValue } from './utils'

export function startGame() {
  console.log('Game is started!')
  initGame()
  buttonStart.disabled = true

  const timer = new Timer({
    ticker: {
      timeSeconds: SESSION_TIME_SECONDS,
      reduceStepSeconds: 0.05,
      callback: (timer) => setTextValue(infoTimer, timer.formattedTickerTime),
    },
  })

  timer.runTicker()
}
