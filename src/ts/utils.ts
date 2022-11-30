import { ALPHABET_LENGTH, A_ASC_CODE, HIDDEN_CLASS_NAME } from './constants'

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

export function generateRandomSet(firstNumber: number, setLength: number) {
  const set = new Set<number>()
  while (set.size < setLength) {
    const newSetElement = Math.floor(Math.random() * setLength) + firstNumber
    set.add(newSetElement)
  }
  return [...set]
}

export function getRandomizedAlphabet() {
  return generateRandomSet(A_ASC_CODE, ALPHABET_LENGTH).map((asc) =>
    String.fromCharCode(asc)
  )
}
