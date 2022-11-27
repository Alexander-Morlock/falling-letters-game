import { infoTimer } from './domElements'
import { Timer } from './timer'
import { setIntervalCallback, setTextValue } from './utils'

export function startGame(timer: Timer) {
  console.log('Game is started!')

  setIntervalCallback(() => {
    timer.reduceTime()
    setTextValue(infoTimer, timer.timeLeft)
  })
}
