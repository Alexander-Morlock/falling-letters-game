import {
  SESSION_TIME_SECONDS,
  TIMER_REDUCING_INTERVAL_SECONDS,
} from './constants'
import { createLetter } from './createLetter'
import { buttonStart, infoScore, infoTimer } from './domElements'
import { initGame } from './initGame'
import { Timer } from './classes/timer'
import { Total } from './classes/total'
import { setTextContent } from './utils'

export function startGame(total: Total) {
  initGame()
  buttonStart.disabled = true

  const timer = new Timer({
    ticker: {
      timeSeconds: SESSION_TIME_SECONDS,
      reduceStepSeconds: TIMER_REDUCING_INTERVAL_SECONDS,
      callback: (timer) => {
        setTextContent(infoTimer, timer.formattedTickerTime)
      },
    },
  })
  const creatingLettersTimer = new Timer({
    ticker: {
      timeSeconds: SESSION_TIME_SECONDS,
      reduceStepSeconds: 1,
      callback: () => createLetter('A', total),
    },
  })

  timer.runTicker()
  createLetter('A', total)
  creatingLettersTimer.runTicker()
}
