<template>
  <theme-switch name="theme"
                role="switch"
                v-model:darkMode="darkMode" />
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
    const darkMode = computed({
      get () { return store.state.darkMode },
      set (val) { store.commit('setDarkMode', val) }
    })
    return {
      darkMode
    }
  }
})
</script>
