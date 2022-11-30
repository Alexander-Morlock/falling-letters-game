import {
  buttonStart,
  gameWrapper,
  totalScore,
  totalWrapper,
} from './domElements'
import { Total } from './classes/total'
import { setTextContent, setVisibility } from './utils'

export function stopGame(total: number) {
  setTextContent(totalScore, total)
  setVisibility(totalWrapper, gameWrapper)
  buttonStart.disabled = false
}
