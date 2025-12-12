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

    <div class="flex gap-2">
      <button
        class="bg-gray-200 p-2 rounded"
        @click="hapticConfirm"
      >
        positive
      </button>

      <button
        class="bg-gray-200 p-2 rounded"
        @click="hapticConfirm"
      >
        negative
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { hapticConfirm } from 'lib/components/hexboard/haptics'
import { Hexboard } from 'lib/index'
import { Hexchess, type San } from '@bedard/hexchess'
import { ref } from 'vue'

const hexchess = ref(Hexchess.init())

function onMove(san: San) {
  hexchess.value.applyMoveUnsafe(san)
}
</script>
