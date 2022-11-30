import { GOLDEN_LETTER_MULTIPLIER } from '../constants'

export class Total {
  private _simpleMatches: number
  private _goldenMatches: number
  private _onChangeCallback?: (t: Total) => void

  constructor(onChangeCallback?: (t: Total) => void) {
    this._goldenMatches = 0
    this._simpleMatches = 0
    this._onChangeCallback = onChangeCallback

    this.increaseSimpleMatches = this.increaseSimpleMatches.bind(this)
    this.increaseGoldenMatches = this.increaseGoldenMatches.bind(this)
  }

  private _runOnChangeCallback() {
    this._onChangeCallback && this._onChangeCallback(this)
  }

  increaseSimpleMatches() {
    this._simpleMatches++
    this._runOnChangeCallback()
  }

  increaseGoldenMatches() {
    this._goldenMatches++
    this._runOnChangeCallback()
  }

  reset() {
    this._goldenMatches = 0
    this._simpleMatches = 0
    this._runOnChangeCallback()
  }

  get result() {
    return this._simpleMatches + GOLDEN_LETTER_MULTIPLIER * this._goldenMatches
  }
}
