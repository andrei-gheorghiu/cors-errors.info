<template>
  <li>
    <router-link :to="{ path: '/faq', hash: `#${identifier}` }"
                 v-text="name" />
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { Faq } from '../../public/faq'
export default defineComponent({
  name: 'RelatedLink',
  props: {
    identifier: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const questions = computed((): Faq[] => store.state.questions)
    const name = computed(
      () => questions.value.find(f => f.id === props.identifier)?.name || `#${props.identifier}`
    )
    return { name }
  }
})
</script>
