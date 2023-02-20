<template>
  <div>
    <h3>page depth One</h3>
    <nuxt-link to="depthTwo">depthTwo</nuxt-link>
    <depth-two />
  </div>
</template>

<script>
import DepthTwo from '@/pages/depthTwo'
export default {
  name: 'DepthOne',
  components: { DepthTwo },
  // middleware: 'lifecycle', // 글로벌 미들웨어를 호출하여 사용
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log('%c<--------Depth1 (page) loaded---------', 'color: orange')
    console.log('%cDepth1 (page). middleware local', 'color: orange')
  },
  asyncData() {
    console.log('%cDepth1 (page). asyncData', 'color: orange')
  },
  fetch() {
    console.log('%cDepth1 (page). fetch', 'color: orange')
  },
  computed: {
    aaa() {
      return console.log('%cDepth1 (page). computed', 'color: orange')
    },
  },
  mounted() {
    this.$sample('Depth1 (page). plugin')
    console.log('%cDepth1 (page). mounted', 'color: orange')
  },
  beforeCreate() {
    console.log('%cDepth1 (page). beforeCreate', 'color: orange')
  },
  created() {
    console.log('%cDepth1 (page). create', 'color: orange')
  },
  beforeMount() {
    console.log('%cDepth1 (page). beforeMount', 'color: orange')
  },
  beforeUpdate() {
    console.log('%cDepth1 (page). beforeUpdate', 'color: orange')
  },
  activated() {
    console.log('%cDepth1 (page). activated', 'color: orange')
  },
  deactivated() {
    console.log('%cDepth1 (page). deactivated', 'color: orange')
  },
  updated() {
    console.log('%cDepth1 (page). updated', 'color: orange')
  },
  beforeDestroy() {
    console.log('%cDepth1 (page). beforeDestroy', 'color: orange')
  },
  destroyed() {
    console.log('%cDepth1 (page). destroyed', 'color: orange')
    console.log('%c---------Depth1 (page) destroyed-------->', 'color: orange')
  },
}
</script>

<style scoped></style>
