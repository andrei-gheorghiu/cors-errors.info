<template>
  <div class="theme-selector" @click="isVisible = !isVisible">
    <geek />
    <div class="dropdown" v-if="isVisible">
      <a href
         v-for="theme in themes"
         :key="theme.class"
         :class="{ active : theme.class === activeTheme }"
         v-text="theme.name"
         @click.prevent="$emit('update:activeTheme', theme.class)" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Geek from './Geek.vue'
export default defineComponent({
  name: 'ThemeSwitch',
  components: {
    Geek
  },
  props: {
    activeTheme: {
      type: String
    }
  },
  data: () => ({
    themes: [
      {
        class: 'stackoverflow-light',
        name: 'Flow Overstack'
      }, {
        class: 'wild-duck',
        name: 'Chemical lobster'
      }, {
        class: 'vuetiful',
        name: 'Vuetiful'
      }],
    isVisible: false
  }),
  emits: ['update:activeTheme']
})
</script>
