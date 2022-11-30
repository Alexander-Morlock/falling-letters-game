import './css/styles.scss'
import { SESSION_TIME_SECONDS } from './ts/constants'
import { buttonStart, infoScore } from './ts/domElements'
import { initGame } from './ts/initGame'
import { Letter } from './ts/classes/letter'
import { startGame } from './ts/startGame'
import { stopGame } from './ts/stopGame'
import { Timer } from './ts/classes/timer'
import { Total } from './ts/classes/total'
import { generateRandomSet, setTextContent } from './ts/utils'

initGame()
const total = new Total(({ result }) => setTextContent(infoScore, result))

const timer = new Timer({
  callbackQueue: {
    queue: [() => startGame(total), () => stopGame(total.result)],
    delaySeconds: SESSION_TIME_SECONDS,
  },
})

buttonStart.addEventListener('click', timer.runCallbackQueue)
