<template>
  <li>
    <router-link :to="{path: '/faq', hash: `#${identifier}`}" v-text="name" />
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import faqs from '../faqs'
import { useStore } from 'vuex'
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
    const name = computed(() => faqs.find(f => f.id === props.identifier)?.name || `#${props.identifier}`)
    const activateQuestion = () => store.commit('setActiveIndex', props.identifier)
    return { name, activateQuestion }
  }
})
</script>

<style scoped>

</style>
