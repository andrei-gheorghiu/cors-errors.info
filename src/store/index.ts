import { createStore } from 'vuex'
import questions, { Faq } from '../../public/faq'

export interface State {
  questions: Faq[];
  activeIndex: string | null;
  activeTheme: string
}

const store = createStore<State>({
  state: {
    questions,
    activeIndex: null,
    activeTheme: 'stackoverflow-light'
  },
  mutations: {
    setActiveIndex (state: State, id: string) {
      state.activeIndex = id
    },
    setQuestions (state: State, questions: Faq[]) {
      state.questions = questions
    },
    setActiveTheme (state: State, theme: string) {
      state.activeTheme = theme
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
