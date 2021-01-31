<template>
  <div class="page">
    <div role="list">
      <Suspense @resolve="scrollToSection(hash)">
        <template #default>
          <question v-for="faq in questions"
                    :key="faq.id"
                    :faq="faq"
                    role="listitem"/>
        </template>
        <template #fallback>
          <loader />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import Question from '@/components/Question.vue'
import Loader from '@/components/Loader.vue'
import { computed, defineComponent, watchEffect, watch } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { useGsap } from '@/plugins/gsap'

export default defineComponent({
  name: 'Faqs',
  components: {
    Question,
    Loader
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const gsap = useGsap()
    const scrollToSection = (hash: string) => {
      if (hash) {
        const target = document.querySelector(hash)
        if (target instanceof HTMLElement) {
          gsap.to(target.closest('.ps'),
            {
              duration: 0.65,
              scrollTo: { y: target, offsetY: 93 }
            })
        }
      }
    }
    const hash = computed(() => router.currentRoute.value.hash)
    const activeTheme = computed(() => store.state.activeTheme)
    const questions = computed(() => store.state.questions)
    watchEffect(() => {
      if (hash.value) {
        store.commit('setActiveIndex', hash.value.slice(1))
      }
    })
    watch(() => activeTheme.value, () => {
      scrollToSection(hash.value)
    })
    watchEffect(() => {
      scrollToSection(hash.value)
    })
    return {
      hash,
      questions,
      scrollToSection
    }
  }
})
</script>
