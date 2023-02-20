export default (context, inject) => {
  /* TODO : plugins */
  inject('sample', (msg) => console.log(`%c${msg}`, 'color: deepskyblue'))
  // pluginTest 라는 함수로 만들어서 컴포넌트에서 사용 가능
}
