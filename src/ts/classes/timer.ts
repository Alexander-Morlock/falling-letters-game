import { TIMER_DECIMAL_FRACTION_LENGTH } from '../constants'

type CallbackQueue = {
  queue: ((t: Timer) => void)[]
  delaySeconds: number
}

type Ticker = {
  timeSeconds: number
  stepSeconds: number
  callback: (t: Timer) => void
}

type Props =
  | {
      callbackQueue: CallbackQueue
      ticker?: Ticker
    }
  | {
      callbackQueue?: CallbackQueue
      ticker: Ticker
    }

export class Timer {
  private _ticker?: Ticker
  private _tickerTimeout?: number
  private _tickerInterval?: number
  private _callbackQueue?: CallbackQueue

  constructor({ ticker, callbackQueue }: Props) {
    this._ticker = ticker
    this._tickerTimeout
    this._tickerInterval
    this._callbackQueue = callbackQueue
  }

  get tickerTime() {
    return this._ticker?.timeSeconds || 0
  }

  get formattedTickerTime() {
    return this.tickerTime.toFixed(TIMER_DECIMAL_FRACTION_LENGTH)
  }

  public stop = () => {
    clearInterval(this._tickerInterval)
    clearTimeout(this._tickerTimeout)
  }

  private _waitMilliSeconds = (ms: number) =>
    new Promise((res) => setTimeout(res, ms))

  private _reduceTickerTime = () => {
    if (!this._ticker) return
    this._ticker.timeSeconds -= this._ticker.stepSeconds
  }

  public runCallbackQueue = async () => {
    if (!this._callbackQueue) return

    for (let i = 0; i < this._callbackQueue.queue.length; i++) {
      this._callbackQueue.queue[i](this)
      await this._waitMilliSeconds(this._callbackQueue.delaySeconds * 1000)
    }
  }

  public runTicker = () => {
    if (!this._ticker) return

    this._tickerInterval = window.setInterval(() => {
      this._ticker?.callback(this)
      this._reduceTickerTime()
    }, this._ticker.stepSeconds * 1000)

    this._tickerTimeout = window.setTimeout(
      this.stop,
      this._ticker.timeSeconds * 1000
    )
  }
}
