import { SESSION_TIME_SECONDS } from './constants'
import { gameWrapper, infoTimer, totalWrapper } from './domElements'
import { setTextContent, setVisibility } from './utils'

export function initGame() {
  setTextContent(infoTimer, SESSION_TIME_SECONDS.toFixed(2))
  setVisibility(gameWrapper, totalWrapper)
}
