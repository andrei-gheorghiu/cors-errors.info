<template>
  <section :id="faq.id"
           :class="{ active: isActive }"
           itemscope
           itemprop="mainEntity"
           itemtype="https://schema.org/Question">
    <h3>
      <router-link :to="{path: '/faq', hash: `#${faq.id}`}" v-text="faq.name" itemprop="name" />
    </h3>
    <div itemscope
         itemprop="acceptedAnswer"
         itemtype="https://schema.org/Answer"
         class="answer-body">
      <div itemprop="text" @click="scrollCheck">
        <vue-markdown-it :source="source" :plugins="plugins" />
      </div>
      <div class="related-questions" v-if="faq.related">
        <h4>Related</h4>
        <ul>
          <related-link v-for="related in faq.related"
                        :identifier="related"
                        :key="related" />
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import HighlightJs from 'markdown-it-highlightjs'
import { defineComponent, ref, nextTick, computed } from 'vue'
import axios from 'axios'
import VueMarkdownIt from 'vue3-markdown-it'
import RelatedLink from '@/components/RelatedLink.vue'
import { useStore } from '@/store'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useRouter } from 'vue-router'
gsap.registerPlugin(ScrollToPlugin)

export default defineComponent({
  name: 'Question',
  props: ['faq'],
  components: {
    RelatedLink,
    VueMarkdownIt
  },
  setup (props) {
    const store = useStore()
    const router = useRouter()
    const source = ref('')
    const isActive = computed(() => store.state.activeIndex === props.faq.id)
    const onClick = () => {
      store.commit('setActiveIndex', props.faq.id)
    }
    const scrollCheck = (e: MouseEvent) => {
      const t = e.target
      if (t instanceof HTMLAnchorElement) {
        const ending = t.href.split('/')[t.href.split('/').length - 1]
        if (ending.length && ending.split('#').length === 2) {
          const [faq, id] = ending.split('#')
          if (faq.toLowerCase() === 'faq') {
            e.preventDefault()
            router.replace({ path: '/faq', hash: `#${id}` })
          }
        }
      }
    }
    axios.get(`/faq/${props.faq.id}.md`)
      .then(r => {
        source.value = r.data
      })

    const plugins = [{
      plugin: HighlightJs
    }]
    return {
      source,
      isActive,
      plugins,
      onClick,
      scrollCheck
    }
  }
})
</script>

<style scoped>
.answer-body {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  transition: height .42s cubic-bezier(.4,0,.2,1);
}
</style>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
.answer-body code:not(.hljs) {
  color: var(--code-inline);
}
</style>
