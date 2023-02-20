<template>
  <div>
    <h3>component depth One</h3>
    <depth-two />
  </div>
</template>

<script>
import DepthTwo from '@/components/depthTwo'
export default {
  name: 'DepthOne',
  components: { DepthTwo },
  // middleware: 'lifecycle', // 글로벌 미들웨어를 호출하여 사용
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log(
      '%c<--------Depth1 (component) loaded---------',
      'color: orange'
    )
    console.log('%cDepth1 (component). middleware local', 'color: orange')
  },
  asyncData() {
    console.log('%cDepth1 (component). asyncData', 'color: orange')
  },
  fetch() {
    console.log('%cDepth1 (component). fetch', 'color: orange')
  },
  computed: {
    aaa() {
      return console.log('%cDepth1 (component). computed', 'color: orange')
    },
  },
  mounted() {
    this.$sample('Depth1 (component). plugin')
    console.log('%cDepth1 (component). mounted', 'color: orange')
  },
  beforeCreate() {
    console.log('%cDepth1 (component). beforeCreate', 'color: orange')
  },
  created() {
    console.log('%cDepth1 (component). create', 'color: orange')
  },
  beforeMount() {
    console.log('%cDepth1 (component). beforeMount', 'color: orange')
  },
  beforeUpdate() {
    console.log('%cDepth1 (component). beforeUpdate', 'color: orange')
  },
  updated() {
    console.log('%cDepth1 (component). updated', 'color: orange')
  },
  activated() {
    console.log('%cDepth1 (component). activated', 'color: orange')
  },
  deactivated() {
    console.log('%cDepth1 (component). deactivated', 'color: orange')
  },
  beforeDestroy() {
    console.log('%cDepth1 (component). beforeDestroy', 'color: orange')
  },
  destroyed() {
    console.log('%cDepth1 (component). destroyed', 'color: orange')
    console.log(
      '%c---------Depth1 (component) destroyed-------->',
      'color: orange'
    )
  },
}
</script>

<style scoped></style>
