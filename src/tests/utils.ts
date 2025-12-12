import { render } from 'vitest-browser-vue'

/** setup a component */
export function setup(setup: () => any): ReturnType<typeof render> {
  return render({ setup })
}
