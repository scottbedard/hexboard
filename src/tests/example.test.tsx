/** @jsxImportSource vue */
import { expect, test } from 'vitest'
import { ref } from 'vue'
import { setup } from './utils'

test('hello world', async () => {
  const text = ref('hello')

  const screen = setup(() => {
    return () => <div data-testid="text">{text.value}</div>
  })

  await expect.element(screen.getByTestId('text')).toHaveTextContent('hello')

  text.value = 'world'

  await expect.element(screen.getByTestId('text')).toHaveTextContent('world')
})
