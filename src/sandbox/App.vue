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
    >
      <template #promotion="{ b, n, q, r, promote }">
        <div class="absolute bg-gray-50 cursor-pointer flex left-1/2 bottom-full rounded-md shadow-md overflow-hidden -translate-x-1/2">
          <button
            class="aspect-square border-r border-gray-200 cursor-pointer flex items-center justify-center size-12 hover:bg-gray-200"
            @click="promote('b')"
          >
            <Component
              class="size-3/4"
              :is="b"
            />
          </button>
          <button
            class="aspect-square border-r border-gray-200 cursor-pointer flex items-center justify-center size-12 hover:bg-gray-200"
            @click="promote('n')"
          >
            <Component
              class="size-3/4"
              :is="n"
            />
          </button>
          <button
            class="aspect-square border-r border-gray-200 cursor-pointer flex items-center justify-center size-12 hover:bg-gray-200"
            @click="promote('r')"
          >
            <Component
              class="size-3/4"
              :is="r"
            />
          </button>
          <button
            class="aspect-square cursor-pointer flex items-center justify-center size-12 hover:bg-gray-200"
            @click="promote('q')"
          >
            <Component
              class="size-3/4"
              :is="q"
            />
          </button>
        </div>
      </template>
    </Hexboard>
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
