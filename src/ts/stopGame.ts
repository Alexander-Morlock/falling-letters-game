import {
  buttonStart,
  gameWrapper,
  totalScore,
  totalWrapper,
} from './domElements'
import { setTextValue, setVisibility } from './utils'

export function stopGame() {
  console.log('Game is stopped!')

  setTextValue(totalScore, Math.floor(Math.random() * 100))
  setVisibility(totalWrapper, gameWrapper)
  buttonStart.disabled = false
}
