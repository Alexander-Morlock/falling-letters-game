import {
  LETTER_SHIFT_TIME_SECONDS,
  MAX_LETTER_FALLING_TIME_SECONDS,
} from './constants'
import { Letter } from './classes/letter'
import { Timer } from './classes/timer'
import { Total } from './classes/total'

export function createLetter(symbol: string, total: Total) {
  let letter: Letter | null = new Letter(symbol)

  const letterTimer = new Timer({
    ticker: {
      timeSeconds: letter.fallingTime,
      stepSeconds: LETTER_SHIFT_TIME_SECONDS,
      callback: letter.shiftDown,
    },
    callbackQueue: {
      delaySeconds: MAX_LETTER_FALLING_TIME_SECONDS,
      queue: [(timer) => timer.runTicker(), unMountLetter],
    },
  })

  function unMountLetter() {
    letter?.removeFromDOM()
    document.removeEventListener('keydown', onKeyDown)
    letter = null
  }

  function onKeyDown(evt: KeyboardEvent) {
    const isMatch = evt.key.toLowerCase() === symbol.toLowerCase()

    if (isMatch) {
      letter?.isGolden && total.increaseGoldenMatches()
      !letter?.isGolden && total.increaseSimpleMatches()

      letterTimer.stop()
      unMountLetter()
    }
  }

  document.addEventListener('keydown', onKeyDown)

  letterTimer.runCallbackQueue()
}
