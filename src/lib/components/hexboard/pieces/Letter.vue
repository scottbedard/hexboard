<template>
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      v-text="type"
      dominant-baseline="middle"
      font-family="sans-serif"
      font-size="30"
      font-weight="bold"
      text-anchor="middle"
      x="25"
      y="27"
      stroke="oklch(37.3% 0.034 259.733)"
      stroke-width="2"
      :fill="type === type.toLowerCase() ? 'oklch(13% 0.028 261.692)' : 'oklch(98.5% 0.002 247.839)'"
    />
  </svg>
</template>

<script lang="ts" setup>
import type { Piece } from '@bedard/hexchess'

defineProps<{
  type: Piece
}>()
</script>
