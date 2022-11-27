import {
  HIDDEN_CLASS_NAME,
  SESSION_TIME_SECONDS,
  TIMER_REDUCING_INTERVAL_SECONDS,
} from './constants'

export function setVisibility(
  activeElement: Element,
  ...hiddenElements: Element[]
) {
  activeElement.classList.remove(HIDDEN_CLASS_NAME)
  hiddenElements.forEach((element) => element.classList.add(HIDDEN_CLASS_NAME))
}

function waitMilliSeconds(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

export async function callbackStack(
  callbacks: (() => void)[],
  sessionMs = SESSION_TIME_SECONDS * 1000
) {
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]()
    await waitMilliSeconds(sessionMs)
  }
}

export function setTextValue(
  element: HTMLParagraphElement | HTMLSpanElement,
  value: string | number
) {
  element.textContent = String(value)
}

export function setIntervalCallback(
  callback: () => void,
  ms = TIMER_REDUCING_INTERVAL_SECONDS * 1000,
  sessionMs = SESSION_TIME_SECONDS * 1000
) {
  const interval = setInterval(callback, ms)

  if (!sessionMs) return
  setTimeout(() => clearInterval(interval), sessionMs)
}
