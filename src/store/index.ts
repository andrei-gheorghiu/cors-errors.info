import { createStore } from 'vuex'
import questions, { Faq } from '@/faqs'

export interface State {
  questions: Faq[];
  activeIndex: string | null;
  darkMode: boolean
}

const store = createStore<State>({
  state: {
    questions,
    activeIndex: null,
    darkMode: false
  },
  mutations: {
    setActiveIndex (state: State, id: string) {
      state.activeIndex = id
    },
    setQuestions (state: State, questions: Faq[]) {
      state.questions = questions
    },
    setDarkMode (state: State, mode: boolean) {
      state.darkMode = mode
    }
  },
  actions: {
  },
  getters: {
    activeQuestion: (state: State) => state.questions.find(f => f.id === state.activeIndex)
  }
})

export default store

export type StoreType = typeof store

export function useStore () {
  return store
}
