import { position } from '@bedard/hexchess'
import { San } from '@bedard/hexchess'
import { expect } from 'vitest'
import type { BrowserPage } from 'vitest/browser'
import { render } from 'vitest-browser-vue'
import { nextTick } from 'vue'

/** make a move on the hexboard by clicking */
export async function clickMove(
  page: BrowserPage,
  ...sans: string[]
): Promise<void> {
  for (const str of sans) {
    const san = San.from(str)

    await page.getByTestId(`position-${position(san.from)}`).click()
    await nextTick()

    await page.getByTestId(`position-${position(san.to)}`).click()
    await nextTick()
  }
}

/** drag and drop a piece on the hexboard */
export async function dragMove(
  page: BrowserPage,
  ...sans: string[]
): Promise<void> {
  for (const str of sans) {
    const san = San.from(str)

    const fromPosition = page.getByTestId(`position-${position(san.from)}`)
    const toPosition = page.getByTestId(`position-${position(san.to)}`)

    await fromPosition
      .element()
      .dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    await nextTick()

    await expect.element(page.getByTestId('drag-piece')).toBeVisible()

    await toPosition
      .element()
      .dispatchEvent(new PointerEvent('pointerup', { bubbles: true }))
    await nextTick()
  }
}

/** setup a component */
export function setup(setup: () => any): ReturnType<typeof render> {
  return render({ setup })
}
