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
    setActiveTheme (state: State, theme: string) {
      state.activeTheme = theme
    }
  }
})

export default store

export type StoreType = typeof store

export function useStore () {
  return store
}
