<template>
  <div>
    <h3>component depth Three</h3>
  </div>
</template>

<script>
export default {
  name: 'DepthThree',
  // middleware: 'lifecycle', // 글로벌 미들웨어를 호출하여 사용
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log('%c<--------Depth3 (component) loaded---------', 'color: green')
    console.log('%cDepth3 (component). middleware local', 'color: green')
  },
  asyncData() {
    console.log('%cDepth3 (component). asyncData', 'color: green')
  },
  fetch() {
    console.log('%cDepth3 (component). fetch', 'color: green')
  },
  computed: {
    aaa() {
      return console.log('%cDepth3 (component). computed', 'color: green')
    },
  },
  mounted() {
    this.$sample('Depth3 (component). plugin')
    console.log('%cDepth3 (component). mounted', 'color: green')
  },
  beforeCreate() {
    console.log('%cDepth3 (component). beforeCreate', 'color: green')
  },
  created() {
    console.log('%cDepth3 (component). create', 'color: green')
  },
  beforeMount() {
    console.log('%cDepth3 (component). beforeMount', 'color: green')
  },
  beforeUpdate() {
    console.log('%cDepth3 (component). beforeUpdate', 'color: green')
  },
  activated() {
    console.log('%cDepth3 (component). activated', 'color: green')
  },
  deactivated() {
    console.log('%cDepth3 (component). deactivated', 'color: green')
  },
  updated() {
    console.log('%cDepth3 (component). updated', 'color: green')
  },
  beforeDestroy() {
    console.log('%cDepth3 (component). beforeDestroy', 'color: green')
  },
  destroyed() {
    console.log('%cDepth3 (component). destroyed', 'color: green')
    console.log(
      '%c---------Depth3 (component) destroyed-------->',
      'color: green'
    )
  },
}
</script>

<style scoped lang="scss">
ul {
  > li {
    > ul {
      > li {
        padding: 10px 0;
        + li {
        }
      }
    }
  }
}
</style>
