<template>
  <section :id="faq.id"
           :class="{ expanded }"
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
      <div itemprop="text">
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
    const source = ref('')
    const expanded = computed(() => store.state.activeIndex === props.faq.id)
    const afterEnter = (element: HTMLElement) => {
      if (element.classList.contains('answer-body')) {
        element.style.height = 'auto'
      }
    }
    const enter = (element: HTMLElement) => {
      if (element.classList.contains('answer-body')) {
        const { width } = getComputedStyle(element)
        element.style.width = width
        element.style.position = 'absolute'
        element.style.visibility = 'hidden'
        element.style.height = 'auto'
        nextTick(() => {
          const { height } = getComputedStyle(element)
          element.style.removeProperty('width')
          element.style.position = 'relative'
          element.style.visibility = 'visible'
          element.style.height = '0px'

          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height

          requestAnimationFrame(() => {
            element.style.height = height
            setTimeout(() => {
              const target = document.querySelector(`#${store.state.activeIndex}`)
              if (target instanceof HTMLElement) {
                gsap.to(target.closest('.ps'),
                  {
                    duration: 0.35,
                    scrollTo: target
                  })
              }
            }, 420)
          })
        })
      }
    }
    const leave = (element: HTMLElement) => {
      if (element.classList.contains('answer-body')) {
        const { height } = getComputedStyle(element)

        element.style.height = height

        // eslint-disable-next-line no-unused-expressions
        getComputedStyle(element).height

        requestAnimationFrame(() => {
          element.style.height = '0'
        })
      }
    }
    const onClick = (e: MouseEvent) => {
      store.commit('setActiveIndex', props.faq.id)
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
      expanded,
      plugins,
      afterEnter,
      leave,
      enter,
      onClick
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
  color: #BADA55;
  .stackoverflow-light & {
    color: var(--links-2);
  }
}
</style>
