import { createStore } from 'vuex'
import { Faq } from '@/faqs'

export interface State {
  questions: Faq[];
  activeIndex: string | null;
}

export default createStore({
  state: {
    questions: [],
    activeIndex: null
  },
  mutations: {
    setActiveIndex (state: State, id: string) {
      state.activeIndex = id
    },
    setQuestions (state: State, questions: Faq[]) {
      state.questions = questions
    }
  },
  actions: {
  },
  getters: {
    activeQuestion: (state: State) => state.questions.find(f => f.id === state.activeIndex)
  }
})
