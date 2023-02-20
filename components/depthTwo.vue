<template>
  <div>
    <h3>component depth Two</h3>
    <depth-three />
  </div>
</template>

<script>
import DepthThree from '@/components/depthThree'
export default {
  name: 'DepthTwo',
  components: { DepthThree },
  // middleware: 'lifecycle', // 글로벌 미들웨어를 호출하여 사용
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log(
      '%c<--------Depth2 (component) loaded---------',
      'color: yellow'
    )
    console.log('%cDepth2 (component). middleware local', 'color: yellow')
  },
  asyncData() {
    console.log('%cDepth2 (component). asyncData', 'color: yellow')
  },
  fetch() {
    console.log('%cDepth2 (component). fetch', 'color: yellow')
  },
  computed: {
    aaa() {
      return console.log('%cDepth2 (component). computed', 'color: yellow')
    },
  },
  mounted() {
    this.$sample('Depth2 (component). plugin')
    console.log('%cDepth2 (component). mounted', 'color: yellow')
  },
  beforeCreate() {
    console.log('%cDepth2 (component). beforeCreate', 'color: yellow')
  },
  created() {
    console.log('%cDepth2 (component). create', 'color: yellow')
  },
  beforeMount() {
    console.log('%cDepth2 (component). beforeMount', 'color: yellow')
  },
  beforeUpdate() {
    console.log('%cDepth2 (component). beforeUpdate', 'color: yellow')
  },
  activated() {
    console.log('%cDepth2 (component). activated', 'color: yellow')
  },
  deactivated() {
    console.log('%cDepth2 (component). deactivated', 'color: yellow')
  },
  updated() {
    console.log('%cDepth2 (component). updated', 'color: yellow')
  },
  beforeDestroy() {
    console.log('%cDepth2 (component). beforeDestroy', 'color: yellow')
  },
  destroyed() {
    console.log('%cDepth2 (component). destroyed', 'color: yellow')
    console.log(
      '%c---------Depth2 (component) destroyed-------->',
      'color: yellow'
    )
  },
}
</script>

<style scoped></style>
