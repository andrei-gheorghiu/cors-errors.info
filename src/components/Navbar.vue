<template>
  <div class="navbar">
    <theme-switch name="theme"
                  role="switch"
                  v-model:activeTheme="activeTheme" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    ThemeSwitch
  },
  setup () {
    const store = useStore()
    const activeTheme = computed({
      get () { return store.state.activeTheme },
      set (theme) { store.commit('setActiveTheme', theme) }
    })
    return {
      activeTheme
    }
  }
})
</script>
