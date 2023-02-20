<template>
  <div>
    <h3>page depth Two</h3>
    <nuxt-link to="depthThree">depthThree</nuxt-link>
    <depth-three />
  </div>
</template>

<script>
import DepthThree from '@/pages/depthThree'
export default {
  name: 'DepthTwo',
  components: { DepthThree },
  // middleware: 'lifecycle', // 글로벌 미들웨어를 호출하여 사용
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log('%c<--------Depth2 (page) loaded---------', 'color: yellow')
    console.log('%cDepth2 (page). middleware local', 'color: yellow')
  },
  asyncData() {
    console.log('%cDepth2 (page). asyncData', 'color: yellow')
  },
  fetch() {
    console.log('%cDepth2 (page). fetch', 'color: yellow')
  },
  computed: {
    aaa() {
      return console.log('%cDepth2 (page). computed', 'color: yellow')
    },
  },
  mounted() {
    this.$sample('Depth2 (page). plugin')
    console.log('%cDepth2 (page). mounted', 'color: yellow')
  },
  beforeCreate() {
    console.log('%cDepth2 (page). beforeCreate', 'color: yellow')
  },
  created() {
    console.log('%cDepth2 (page). create', 'color: yellow')
  },
  beforeMount() {
    console.log('%cDepth2 (page). beforeMount', 'color: yellow')
  },
  beforeUpdate() {
    console.log('%cDepth2 (page). beforeUpdate', 'color: yellow')
  },
  activated() {
    console.log('%cDepth2 (page). activated', 'color: yellow')
  },
  deactivated() {
    console.log('%cDepth2 (page). deactivated', 'color: yellow')
  },
  updated() {
    console.log('%cDepth2 (page). updated', 'color: yellow')
  },
  beforeDestroy() {
    console.log('%cDepth2 (page). beforeDestroy', 'color: yellow')
  },
  destroyed() {
    console.log('%cDepth2 (page). destroyed', 'color: yellow')
    console.log('%c---------Depth2 (page) destroyed-------->', 'color: yellow')
  },
}
</script>

<style scoped></style>
