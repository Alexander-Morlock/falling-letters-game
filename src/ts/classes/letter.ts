import {
  ALPHABET_LENGTH,
  A_ASC_CODE,
  GOLDEN_LETTER_MULTIPLIER,
  LETTER_HEIGHT_PX,
  LETTER_INIT_TOP_PX,
  LETTER_SHIFT_TIME_SECONDS,
  MAX_LETTER_FALLING_TIME_SECONDS,
  PROBABILITY_OF_GOLDEN_LETTER,
} from '../constants'
import { game } from '../domElements'

export class Letter {
  private _isGolden: boolean
  private _symbol: string
  private _fallingTimeSeconds: number
  private _element: HTMLDivElement
  private _topPx: number
  private _leftPercent: number
  private _shiftStepPx: number

  constructor(symbol: string) {
    this.shiftDown = this.shiftDown.bind(this)
    this._symbol = symbol
    this._isGolden = Math.random() <= PROBABILITY_OF_GOLDEN_LETTER
    this._fallingTimeSeconds =
      MAX_LETTER_FALLING_TIME_SECONDS /
      (this._isGolden ? GOLDEN_LETTER_MULTIPLIER : 1)
    this._topPx = LETTER_INIT_TOP_PX
    this._leftPercent = Math.floor(Math.random() * 5) * 16 + 10
    this._element = this._generateHTML()
    this._shiftStepPx =
      ((game.offsetHeight - LETTER_INIT_TOP_PX - LETTER_HEIGHT_PX) /
        (MAX_LETTER_FALLING_TIME_SECONDS / LETTER_SHIFT_TIME_SECONDS)) *
      (this._isGolden ? GOLDEN_LETTER_MULTIPLIER : 1)
    game.append(this._element)
  }

  private _generateHTML() {
    const div = document.createElement('div')
    div.classList.add('letter')
    this._isGolden && div.classList.add('golden')
    div.innerHTML = `<div class="letter${this._isGolden ? ' golden' : ''}"><p>${
      this._symbol
    }</p></div>`
    const el = div.firstChild as HTMLDivElement
    el.style.setProperty('top', `${this._topPx}px`)
    el.style.setProperty('left', `${this._leftPercent}%`)
    return el
  }

  get isGolden() {
    return this._isGolden
  }

  get fallingTime() {
    return this._fallingTimeSeconds
  }

  removeFromDOM() {
    this._element.remove()
  }

  shiftDown() {
    this._topPx += this._shiftStepPx

    if (this._topPx > game.offsetHeight - LETTER_INIT_TOP_PX) {
      this.removeFromDOM()
      return
    }

    this._element.style.setProperty('top', `${this._topPx}px`)
  }
}
