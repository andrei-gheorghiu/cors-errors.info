<template>
  <div class="sidebar">
    <perfect-scrollbar>
      <nav role="navigation">
        <router-link :to="`/faq#${faq.id}`"
                     v-for="faq in questions"
                     :key="faq.id"
                     tag="div"
                     v-slot="{ href, route, navigate }">
          <a :href="href"
             :class="{ active: route.hash === currentHash || activeIndex === faq.id }"
             v-text="faq.name"
             @click="navigate"/>
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
    const activeIndex = computed(() => store.state.activeIndex)
    const questions = store.state.questions
    return { questions, currentHash, activeIndex }
  }
})
</script>
