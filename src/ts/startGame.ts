import {
  LETTERS_CREATING_INTERVAL_SECONDS,
  SESSION_TIME_SECONDS,
  TIMER_REDUCING_INTERVAL_SECONDS,
} from './constants'
import { createLetter } from './createLetter'
import { buttonStart, infoScore, infoTimer } from './domElements'
import { initGame } from './initGame'
import { Timer } from './classes/timer'
import { Total } from './classes/total'
import { getRandomizedAlphabet, setTextContent } from './utils'

export function startGame(total: Total) {
  total.reset()
  let preGeneratedLeters = initGame()
  buttonStart.disabled = true

  const timer = new Timer({
    ticker: {
      timeSeconds: SESSION_TIME_SECONDS,
      stepSeconds: TIMER_REDUCING_INTERVAL_SECONDS,
      callback: (timer) => {
        setTextContent(infoTimer, timer.formattedTickerTime)
      },
    },
  })

  const creatingLettersTimer = new Timer({
    ticker: {
      timeSeconds: SESSION_TIME_SECONDS,
      stepSeconds: LETTERS_CREATING_INTERVAL_SECONDS,
      callback: () => {
        if (!preGeneratedLeters.length) {
          preGeneratedLeters = getRandomizedAlphabet()
        }
        createLetter(preGeneratedLeters.pop() || 'A', total)
      },
    },
  })

  timer.runTicker()
  createLetter(preGeneratedLeters.pop() || 'A', total)
  creatingLettersTimer.runTicker()
}
