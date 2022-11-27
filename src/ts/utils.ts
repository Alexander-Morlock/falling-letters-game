import { HIDDEN_CLASS_NAME, SESSION_TIME_SECONDS } from './constants'

export function setVisibility(
  activeElement: Element,
  ...hiddenElements: Element[]
) {
  activeElement.classList.remove(HIDDEN_CLASS_NAME)
  hiddenElements.forEach((element) => element.classList.add(HIDDEN_CLASS_NAME))
}

function waitSeconds(seconds: number) {
  return new Promise((res) => setTimeout(res, seconds * 1000))
}

export async function callbackStack(
  callbacks: (() => void)[],
  sessionTimeSeconds = SESSION_TIME_SECONDS
) {
  callbacks[0]()
  if (callbacks.length < 2) return

  for (let i = 1; i < callbacks.length; i++) {
    await waitSeconds(sessionTimeSeconds)
    callbacks[i]()
  }
}
