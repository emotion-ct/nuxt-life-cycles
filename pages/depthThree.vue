<template>
  <div>
    <h3>page depth Three</h3>
    <nuxt-link v-if="$route.path !== '/depthOne'" to="depthOne"
      >depthOne</nuxt-link
    >
    <div class="sub-tit">
      {{ $route.path }} <nuxt-link to="/" class="result"> EXIT</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DepthThree',
  // middleware: 'lifecycle', // 글로벌 미들웨어를 호출하여 사용
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log('%c<--------Depth3 loaded---------', 'color: green')
    console.log('%cDepth3. middleware local', 'color: green')
  },
  asyncData() {
    console.log('%cDepth3. asyncData', 'color: green')
  },
  fetch() {
    console.log('%cDepth3. fetch', 'color: green')
  },
  computed: {
    aaa() {
      return console.log('%cDepth3. computed', 'color: green')
    },
  },
  mounted() {
    this.$sample('Depth3 (page). plugin')
    console.log('%cDepth3 (page). mounted', 'color: green')
  },
  beforeCreate() {
    console.log('%cDepth3 (page). beforeCreate', 'color: green')
  },
  created() {
    console.log('%cDepth3 (page). create', 'color: green')
  },
  beforeMount() {
    console.log('%cDepth3 (page). beforeMount', 'color: green')
  },
  beforeUpdate() {
    console.log('%cDepth3 (page). beforeUpdate', 'color: green')
  },
  updated() {
    console.log('%cDepth3 (page). updated', 'color: green')
  },
  activated() {
    console.log('%cDepth3 (page). activated', 'color: green')
  },
  deactivated() {
    console.log('%cDepth3 (page). deactivated', 'color: green')
  },
  beforeDestroy() {
    console.log('%cDepth3 (page). beforeDestroy', 'color: green')
  },
  destroyed() {
    console.log('%cDepth3 (page). destroyed', 'color: green')
    console.log('%c---------Depth3 (page) destroyed-------->', 'color: green')
  },
}
</script>

<style scoped></style>
