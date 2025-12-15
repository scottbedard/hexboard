<template>
  <div>
    <!-- Menu button -->
    <button
      class="fixed right-4 top-4 z-50 rounded-lg bg-gray-200 p-2 dark:bg-gray-700"
      @click="isOpen = !isOpen"
    >
      <Menu
        v-if="!isOpen"
        class="size-6 text-gray-700 dark:text-gray-200"
      />
      <X
        v-else
        class="size-6 text-gray-700 dark:text-gray-200"
      />
    </button>

    <!-- Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/50"
        @click="isOpen = false"
      />
    </Transition>

    <!-- Slide-out panel -->
    <Transition
      enter-active-class="transition-transform duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        class="fixed right-0 top-0 z-40 h-full w-72 bg-gray-100 p-4 pt-16 dark:bg-gray-800"
      >
        <a
          class="flex items-center gap-3 rounded-lg p-2 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
          href="https://github.com/scottbedard/hexboard"
          target="_blank"
        >
          <Github class="size-5" />
          <span>Visit Repository</span>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import Github from 'sandbox/components/icons/Github.vue'
import Menu from 'sandbox/components/icons/Menu.vue'
import X from 'sandbox/components/icons/X.vue'
import { ref } from 'vue'

const isOpen = ref(false)
</script>
