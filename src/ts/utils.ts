import {
  ALPHABET_LENGTH,
  A_ASC_CODE,
  GOLDEN_LETTER_MULTIPLIER,
  HIDDEN_CLASS_NAME,
  LETTER_HEIGHT_PX,
  LETTER_INIT_TOP_PX,
  LETTER_SHIFT_TIME_SECONDS,
  MAX_LETTER_FALLING_TIME_SECONDS,
} from './constants'

export function setVisibility(
  activeElement: Element,
  ...hiddenElements: Element[]
) {
  activeElement.classList.remove(HIDDEN_CLASS_NAME)
  hiddenElements.forEach((element) => element.classList.add(HIDDEN_CLASS_NAME))
}

export function setTextContent(
  element: HTMLParagraphElement | HTMLSpanElement,
  value: string | number
) {
  element.textContent = String(value)
}

export function generateRandomizedSet(firstNumber: number, setLength: number) {
  const arr = [...Array(setLength).keys()].map((x) => x + firstNumber)
  return arr.sort(() => Math.random() - 0.5)
}

export function generateRandomizedAlphabet() {
  return generateRandomizedSet(A_ASC_CODE, ALPHABET_LENGTH).map((asc) =>
    String.fromCharCode(asc)
  )
}

export function getLetterShiftPx(gameoffsetHeight: number, isGolden: boolean) {
  return (
    ((gameoffsetHeight - LETTER_INIT_TOP_PX - LETTER_HEIGHT_PX) /
      (MAX_LETTER_FALLING_TIME_SECONDS / LETTER_SHIFT_TIME_SECONDS)) *
    (isGolden ? GOLDEN_LETTER_MULTIPLIER : 1)
  )
}

export function generateLeftPosition() {
  return Math.floor(Math.random() * 5) * 16 + 10
}

export function getFallingTimeSecinds(isGolden: boolean) {
  return (
    MAX_LETTER_FALLING_TIME_SECONDS / (isGolden ? GOLDEN_LETTER_MULTIPLIER : 1)
  )
}
