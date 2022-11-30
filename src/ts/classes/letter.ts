import { LETTER_INIT_TOP_PX, PROBABILITY_OF_GOLDEN_LETTER } from '../constants'
import { game } from '../domElements'
import {
  generateLeftPosition,
  getFallingTimeSecinds,
  getLetterShiftPx,
} from '../utils'

export class Letter {
  private _isGolden: boolean
  private _symbol: string
  private _fallingTimeSeconds: number
  private _element: HTMLDivElement
  private _topPx: number
  private _leftPercent: number
  private _shiftStepPx: number

  constructor(symbol: string) {
    this._symbol = symbol
    this._isGolden = Math.random() <= PROBABILITY_OF_GOLDEN_LETTER
    this._fallingTimeSeconds = getFallingTimeSecinds(this._isGolden)
    this._topPx = LETTER_INIT_TOP_PX
    this._leftPercent = generateLeftPosition()
    this._element = this._generateHTML()
    this._shiftStepPx = getLetterShiftPx(game.offsetHeight, this._isGolden)
    game.append(this._element)
  }

  private _generateHTML = () => {
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

  get symbol() {
    return this._symbol
  }

  get isGolden() {
    return this._isGolden
  }

  get fallingTime() {
    return this._fallingTimeSeconds
  }

  public removeFromDOM = () => this._element.remove()

  public shiftDown = () => {
    this._topPx += this._shiftStepPx

    if (this._topPx > game.offsetHeight - LETTER_INIT_TOP_PX) {
      this.removeFromDOM()
      return
    }

    this._element.style.setProperty('top', `${this._topPx}px`)
  }
}
