import {
  buttonStart,
  gameWrapper,
  totalScore,
  totalWrapper,
} from './domElements'
import { Total } from './classes/total'
import { setTextContent, setVisibility } from './utils'

export function stopGame(total: number) {
  if (total === 0) {
    totalWrapper.classList.add('no-reward')
  }
  setTextContent(totalScore, total)
  setVisibility(totalWrapper, gameWrapper)
  buttonStart.disabled = false
}
