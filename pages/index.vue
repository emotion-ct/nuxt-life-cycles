<template>
  <div>
    <depthOne />
    <nuxt-link to="depthOne">page depthOne</nuxt-link>
    <div class="cont-wrap">
      <ul>
        <li>
          첫 진입, 새로고침 시 로그가 2번 뜨는 이유 : nuxt가 모든 작업을
          client측에서 수행하는게 아니라
          <strong class="txt-ssr">pre-rendering</strong> (SSR) 과정에서 한번
          실행 되고 페이지 로드가 완료 된 후 javascript가 한번 더 실행 되어 두번
          표시 되는 것. 이 과정을
          <strong class="txt-important">hydration</strong> 과정 이라고 한다.
          <a href="https://jh-7.tistory.com/27" target="_blank"
            >Universal Mode 참고 자료</a
          >
        </li>
        <li>
          <h4>SSR (서버 사이드 랜더링)</h4>
          <strong class="txt-ssr">nuxtServerInit</strong> >
          <strong class="txt-ssr">middleware</strong> >
          <strong class="txt-ssr">asyncData</strong> >
          <strong class="txt-ssr">beforeCreate</strong> >
          <strong class="txt-ssr">create</strong> >
          <strong class="txt-ssr">fetch</strong>
        </li>
        <li>
          <h4>CSR (클라이언트 사이드 랜더링)</h4>
          <strong class="txt-csr">beforeCreate</strong> >
          <strong class="txt-csr">create</strong> >
          <strong class="txt-csr">beforeMount</strong> >
          <strong class="txt-csr">plugin</strong> >
          <strong class="txt-csr">mounted</strong> > (rebuild) >
          <strong class="txt-csr">beforeUpdate</strong> >
          <strong class="txt-csr">update</strong>
        </li>
        <li>
          <h4>페이지 전환 시</h4>
          최상단 부모 컴포넌트
          <strong class="txt-csr">middleware</strong> > 최상단 부모 컴포넌트
          <strong class="txt-csr">asyncData</strong> > 이전 페이지 최상단 부모
          컴포넌트 부터 <strong class="txt-csr">brforeDestroy</strong> > 최하단
          자식 컴포넌트 부터 <strong class="txt-csr">destroyed</strong> >
          (rendering) 최초 SSR 이후는 필요한 페이지만 로드 하기 때문에
          <strong class="txt-important">SSR 과정</strong> 생략 하고
          <strong class="txt-important">CSR 과정</strong>만 진행됨 > (최상단
          컴포넌트 부터) 𝄆 <strong class="txt-csr">beforeCreate</strong> >
          <strong class="txt-csr">create</strong> >
          <strong class="txt-csr">beforeMount</strong> >
          <strong class="txt-csr">fetch</strong> 𝄇 > 최하단 자식 컴포넌트로 부터
          <strong class="txt-csr">plugin</strong> > 최하단 자식 컴포넌트로 부터
          <strong class="txt-csr">mounted</strong> > 중간 서버 업데이트
          (rebuild)시 <strong class="txt-csr">beforeUpdate</strong> >
          <strong class="txt-csr">update</strong>
        </li>
      </ul>
      <input v-model="bbb" type="text" />
    </div>
    <!-- https://levelup.gitconnected.com/the-complete-nuxt-guide-940751e1a6a5 -->
    <!-- https://heewon26.tistory.com/344 -->
    <!-- https://levelup.gitconnected.com/the-complete-nuxt-guide-940751e1a6a5 -->
  </div>
</template>

<script>
// import { mapState } from 'Vuex'
import DepthOne from '@/components/depthOne'

export default {
  // fetchOnServer: false, // default: true 이며 server-rendering 중에 fetch()를 호출할지 설정할 수 있습니다.
  name: 'IndexPage',
  components: { DepthOne },
  middleware() {
    // 페이지 내에서의 미들웨어 사용
    console.clear()
    console.log('%c<--------index loaded---------', 'color: red')
    console.log('%cindex. middleware local', 'color: red')
  },
  asyncData() {
    console.log('%cindex. asyncData', 'color: red')
  },
  data() {
    return {
      bbb: '',
    }
  },
  fetch() {
    console.log('%cindex. fetch', 'color: red')
  },
  computed: {
    aaa() {
      return console.log('%cindex. computed', 'color: red')
    },
  },
  mounted() {
    this.$sample('index. plugin')
    console.log('%cindex. mounted', 'color: red')
  },
  beforeCreate() {
    console.log('%cindex. beforeCreate', 'color: red')
  },
  created() {
    console.log('%cindex. create', 'color: red')
  },
  beforeMount() {
    console.log('%cindex. beforeMount', 'color: red')
  },
  beforeUpdate() {
    console.log('%cindex. beforeUpdate', 'color: red')
  },
  updated() {
    console.log('%cindex. updated', 'color: red')
  },
  activated() {
    console.log('%cindex. activated', 'color: red')
  },
  deactivated() {
    console.log('%cindex. deactivated', 'color: red')
  },
  beforeDestroy() {
    console.log('%cindex. beforeDestroy', 'color: red')
  },
  destroyed() {
    console.log('%cindex. destroyed', 'color: red')
    console.log('%c---------index destroyed-------->', 'color: red')
  },
}
</script>
<style scoped lang="scss">
ul {
  li {
    & + li {
      margin: 10px 0 0 0;
    }
  }
}
</style>
