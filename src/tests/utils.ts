import { nextTick } from 'vue'
import type { BrowserPage } from 'vitest/browser'
import { render } from 'vitest-browser-vue'
import { San } from '@bedard/hexchess'

/** make a move on the hexboard */
export async function makeMove(page: BrowserPage, ...sans: string[]): Promise<void> {
  for (const str of sans) {
    const san = San.from(str)

    await page.getByTestId(`position-${san.from}`).click()
    await nextTick()

    await page.getByTestId(`position-${san.to}`).click()
    await nextTick()
  }
}

/** setup a component */
export function setup(setup: () => any): ReturnType<typeof render> {
  return render({ setup })
}
