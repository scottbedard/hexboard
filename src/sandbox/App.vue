<template>
  <div>
    <Hexboard
      class="max-w-screen-sm mx-auto"
      active
      autoselect
      ignore-turn
      :hexchess
      :playing="true"
      @move="onMove"
    />
  </div>
</template>

<script setup lang="ts">
import { Hexboard } from 'lib/index'
import { Hexchess, type San } from '@bedard/hexchess'
import { ref } from 'vue'

const hexchess = ref(Hexchess.init())

function onMove(san: San) {
  hexchess.value.applyMoveUnsafe(san)
}
</script>
