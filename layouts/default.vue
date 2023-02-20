<template>
  <div id="app">
    <div v-if="$nuxt.isOffline">offline</div>
    <div v-else class="content">
      <!-- keepalive -->
      <!--      <KeepAlive :max="10" :include="['IndexPage']">-->
      <!--        <Nuxt :key="$route.path" />-->
      <!--      </KeepAlive>-->
      <Nuxt />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  display: flex;
  .content {
    padding: 40px;
    box-sizing: border-box;
  }
}
</style>
