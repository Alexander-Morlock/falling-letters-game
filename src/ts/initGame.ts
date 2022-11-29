import { SESSION_TIME_SECONDS } from './constants'
import { gameWrapper, infoTimer, totalWrapper } from './domElements'
import { setTextValue, setVisibility } from './utils'

export function initGame() {
  setTextValue(infoTimer, SESSION_TIME_SECONDS.toFixed(2))
  setVisibility(gameWrapper, totalWrapper)
}
