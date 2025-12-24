import { x, y } from './geometry'
import type { Vec } from './types'

/** create svg vector path */
export function d(arr: Vec<2>[]) {
  if (arr.length === 0) {
    return ''
  }

  const [origin, ...points] = arr

  let path = `M ${rounded(x(origin[0]))} ${rounded(y(origin[1]))} L `

  for (const point of points) {
    path += `${rounded(x(point[0]))} ${rounded(y(point[1]))} `
  }

  return `${path} Z`
}

/** round a number to 5 decimal places */
export function rounded(x: number) {
  return x.toFixed(8)
}
