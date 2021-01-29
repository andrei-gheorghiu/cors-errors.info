<template>
  <div :class="{ 'stackoverflow-light': !darkMode }">
    <perfect-scrollbar>
      <div class="page" role="main">
        <div class="sidebar">
          <theme-switch name="theme"
                        role="switch"
                        v-model:darkMode="darkMode" />
        </div>
        <div role="list">
          <question v-for="faq in questions"
                    :key="faq.id"
                    :faq="faq"
                    role="listitem" />
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import faqs from './faqs'
import Question from './components/Question.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    ThemeSwitch,
    Question
  },
  setup () {
    const store = useStore()

    // this breaks on my machine (says store is undefined):
    // const questions = computed(store => store.state.questions)
    const questions = ref(faqs)
    const darkMode = ref(false)
    const activeQuestion = computed(() => store.getters.activeQuestion)
    return {
      questions,
      activeQuestion,
      darkMode
    }
  },
  mounted () {
    this.$store.commit('setQuestions', faqs)
  }
})
</script>
<style lang="scss" src="./assets/app.scss" />
