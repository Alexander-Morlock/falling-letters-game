import { ALPHABET_LENGTH, A_ASC_CODE, SESSION_TIME_SECONDS } from './constants'
import { gameWrapper, infoTimer, totalWrapper } from './domElements'
import {
  generateRandomSet,
  getRandomizedAlphabet,
  setTextContent,
  setVisibility,
} from './utils'

export function initGame() {
  totalWrapper.classList.remove('no-reward')
  setTextContent(infoTimer, SESSION_TIME_SECONDS.toFixed(2))
  setVisibility(gameWrapper, totalWrapper)

  return getRandomizedAlphabet()
}
