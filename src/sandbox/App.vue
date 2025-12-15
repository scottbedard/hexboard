<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <HomeToolbar />

    <Hexboard
      active
      autoselect
      class="mx-auto max-w-screen-sm"
      ignore-turn
      :hexchess
      :playing="true"
      @move="onMove"
    />
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
