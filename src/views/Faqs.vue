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
import Question from '@/components/Question.vue'
import { computed, defineComponent, watchEffect, watch, inject } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Faqs',
  inject: ['gsap'],
  components: {
    Question
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const gsap: any = inject('$gsap')
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
    const hash = computed(() => router.currentRoute.value.hash)
    const activeTheme = computed(() => store.state.activeTheme)
    const questions = computed(() => store.state.questions)
    watchEffect(() => {
      if (hash.value) {
        store.commit('setActiveIndex', hash.value.slice(1))
      }
    })
    watch(() => activeTheme.value, () => {
      scrollToHash(hash.value)
    })
    watchEffect(() => {
      scrollToHash(hash.value)
    })
    return {
      hash,
      questions,
      scrollToHash
    }
  },
  mounted () {
    this.$nextTick(() => setTimeout(() => this.scrollToHash(this.hash), 1234))
  }
})
</script>

<style scoped>

</style>
