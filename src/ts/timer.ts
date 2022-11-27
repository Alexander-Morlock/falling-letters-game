import {
  SESSION_TIME_SECONDS,
  TIMER_DECIMAL_FRACTION_LENGTH,
  TIMER_REDUCING_INTERVAL_SECONDS,
} from './constants'

export class Timer {
  private time: number

  constructor(initValueSeconds?: number) {
    this.time = initValueSeconds || SESSION_TIME_SECONDS
  }

  get timeLeft() {
    return this.time.toFixed(TIMER_DECIMAL_FRACTION_LENGTH)
  }

  get isInitState() {
    return this.time === SESSION_TIME_SECONDS
  }

  setTime(seconds: number) {
    this.time = seconds
  }

  reduceTime() {
    this.time -= TIMER_REDUCING_INTERVAL_SECONDS
  }
}
