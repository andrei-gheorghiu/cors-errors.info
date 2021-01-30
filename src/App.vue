<template>
  <div class="app-wrapper" :class="{ 'stackoverflow-light': !darkMode }">
    <header class="header">
      <navbar />
    </header>
    <div class="page-wrapper">
      <sidebar />
      <main role="main">
        <perfect-scrollbar>
          <router-view />
        </perfect-scrollbar>
      </main>
    </div>
    <footer class="footer">
      <div>
        This is footer...
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Navbar
  },
  setup () {
    const store = useStore()
    const darkMode = computed(() => store.state.darkMode)
    return { darkMode }
  }
})
</script>
<style lang="scss" src="./assets/app.scss" />
