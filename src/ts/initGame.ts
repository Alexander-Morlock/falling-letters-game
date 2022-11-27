import { SESSION_TIME_SECONDS } from './constants'
import { gameWrapper, infoTimer, totalWrapper } from './domElements'
import { Timer } from './timer'
import { setTextValue, setVisibility } from './utils'

export function initGame(timer: Timer) {
  timer.setTime(SESSION_TIME_SECONDS)
  setTextValue(infoTimer, timer.timeLeft)
  setVisibility(gameWrapper, totalWrapper)
}
