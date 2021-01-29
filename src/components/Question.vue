<template>
  <section :id="faq.id"
           :class="{ expanded }"
           itemscope
           itemprop="mainEntity"
           itemtype="https://schema.org/Question">
    <h3>
      <a :href="`faq#${faq.id}`" @click.prevent="onClick">
        <span itemprop="name" v-text="faq.name" />
      </a>
    </h3>
    <transition name="expand"
                mode="out-in"
                @after-enter="afterEnter"
                @enter="enter"
                @leave="leave">
      <div v-if="expanded"
           :key="1"
           itemscope
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
      <div v-else
           :key="2"
           itemscope
           itemprop="acceptedAnswer"
           itemtype="https://schema.org/Answer"
           class="sr-only">
        <div itemprop="text">
          <vue-markdown-it :source="source" :plugins="plugins" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script lang="ts">
import HighlightJs from 'markdown-it-highlightjs'
import { defineComponent, ref, nextTick } from 'vue'
import axios from 'axios'
import VueMarkdownIt from 'vue3-markdown-it'
import RelatedLink from '@/components/RelatedLink.vue'

export default defineComponent({
  name: 'Question',
  props: ['faq'],
  components: {
    RelatedLink,
    VueMarkdownIt
  },
  setup (props) {
    const source = ref('')
    const expanded = ref(false)
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
      expanded.value = !expanded.value
      console.log(e.target)
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
    color: var(--f-3);
  }
}
</style>
