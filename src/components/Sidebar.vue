<template>
  <div class="sidebar">
    <perfect-scrollbar>
      <nav role="navigation">
        <router-link :to="`/faq#${faq.id}`"
                     v-for="faq in faqs"
                     :key="faq.id"
                     tag="div"
                     v-slot="{ href, route, navigate }">
          <a :href="href"
             :class="{ active: route.hash === currentHash }"
             @click="navigate">{{  faq.name }}</a>
        </router-link>
      </nav>
    </perfect-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Sidebar',
  setup () {
    const store = useStore()
    const router = useRouter()
    const currentHash = computed(() => router.currentRoute.value.hash)
    const faqs = store.state.questions
    return { faqs, currentHash }
  }
})
</script>
<style lang="scss">
  .sidebar .ps {
    height: 100vh;
    overflow: hidden;
  }
</style>
