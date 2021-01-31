<template>
  <div class="theme-selector" @click="isVisible = !isVisible">
    <geek-icon />
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
import { defineComponent, ref } from 'vue'
import GeekIcon from './GeekIcon.vue'
import themes from '@/assets/themes.json'
export default defineComponent({
  name: 'ThemeSwitch',
  components: {
    GeekIcon
  },
  props: {
    activeTheme: {
      type: String
    }
  },
  data: () => ({
    themes,
    isVisible: false
  }),
  emits: ['update:activeTheme']
})
</script>
