import { HIDDEN_CLASS_NAME } from './constants'

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
