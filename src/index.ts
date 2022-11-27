import './css/styles.scss'
import {
  buttonStart,
  gameWrapper,
  totalScoreNumber,
  totalWrapper,
} from './ts/domElements'
import { callbackStack, setVisibility } from './ts/utils'

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true
  setVisibility(gameWrapper, totalWrapper)
  callbackStack(
    [
      () => console.log('Game is started!'),
      () => {
        totalScoreNumber.textContent = String(Math.floor(Math.random() * 100))
        setVisibility(totalWrapper, gameWrapper)
        buttonStart.disabled = false
      },
    ],
    3
  )
})
