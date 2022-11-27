import {
  TIMER_DECIMAL_FRACTION_LENGTH,
  TIMER_REDUCING_INTERVAL_SECONDS,
} from './constants'

export class Timer {
  private time: number

  constructor(initValueSeconds: number) {
    this.time = initValueSeconds
  }

  get timeLeft() {
    return this.time.toFixed(TIMER_DECIMAL_FRACTION_LENGTH)
  }

  setTime(seconds: number) {
    this.time = seconds
  }

  reduceTime() {
    this.time -= TIMER_REDUCING_INTERVAL_SECONDS
  }
}
