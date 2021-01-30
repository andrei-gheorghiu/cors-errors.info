<template>
  <div class="page">
    <div role="list">
      <question v-for="faq in questions"
                :key="faq.id"
                :faq="faq"
                role="listitem" />
    </div>
  </div>
</template>

<script lang="ts">
import Question from '../components/Question'
import { computed, defineComponent, watchEffect, watch } from 'vue'
import { useStore } from '@/store'
import faqs from '@/faqs'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const scrollToHash = (hash: string) => {
  if (hash) {
    const target = document.querySelector(hash)
    if (target instanceof HTMLElement) {
      gsap.to(target.closest('.ps'),
        {
          duration: 0.65,
          scrollTo: { y: target, offsetY: 90 }
        })
    }
  }
}

export default defineComponent({
  name: 'Faqs',
  components: {
    Question
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const hash = computed(() => router.currentRoute.value.hash)
    const darkMode = computed(() => store.state.darkMode)
    const questions = computed(() => store.state.questions)
    const activeQuestion = computed(() => store.getters.activeQuestion)
    watchEffect(() => {
      if (hash.value) {
        store.commit('setActiveIndex', hash.value.slice(1))
      }
    })
    watch(() => darkMode.value, () => {
      scrollToHash(hash.value)
    })
    watchEffect(() => {
      scrollToHash(hash.value)
    })
    store.commit('setQuestions', faqs)
    return {
      hash,
      questions,
      activeQuestion
    }
  },
  mounted () {
    this.$nextTick(() => setTimeout(() => scrollToHash(this.hash), 1234))
  }
})
</script>

<style scoped>

</style>