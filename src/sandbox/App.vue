<template>
  <div>
    <Hexboard
      active
      autoselect
      class="max-w-screen-sm mx-auto"
      ignore-turn
      :hexchess
      :playing="true"
      @move="onMove"
    />

    <div class="flex gap-2 p-3">
      <HomeToolbar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Hexchess, type San } from '@bedard/hexchess'
import { Hexboard } from 'lib/index'
import HomeToolbar from 'sandbox/views/HomeToolbar.vue'
import { ref } from 'vue'

const hexchess = ref(Hexchess.init())

function onMove(san: San) {
  hexchess.value.applyMoveUnsafe(san)
}
</script>
