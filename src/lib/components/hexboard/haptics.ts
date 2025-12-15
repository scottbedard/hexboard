/** check if haptics are supported */
export const supportsHaptics
  = typeof window === 'undefined'
    ? false
    : window.matchMedia('(pointer: coarse)').matches

/** trigger haptic feedback */
function tick() {
  try {
    // use the native api if supported
    if (navigator.vibrate) {
      navigator.vibrate(50)
      return
    }

    if (!supportsHaptics) return

    // otherwise simulate a tep using a checkbox
    const labelEl = document.createElement('label')
    labelEl.ariaHidden = 'true'
    labelEl.style.display = 'none'

    const inputEl = document.createElement('input')
    inputEl.type = 'checkbox'
    inputEl.setAttribute('switch', '')
    labelEl.appendChild(inputEl)

    document.head.appendChild(labelEl)
    labelEl.click()
    document.head.removeChild(labelEl)
  }
  catch {
    // do nothing
  }
}

export function hapticConfirm() {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50])
    return
  }

  tick()
  setTimeout(tick, 120)
}

export function hapticError() {
  if (navigator.vibrate) {
    navigator.vibrate([50, 70, 50, 70, 50])
    return
  }

  tick()
  setTimeout(tick, 120)
  setTimeout(tick, 240)
}
