<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Fractions</router-link>
      <div class="divider">|</div>
      <router-link to="/websocket">Websockets</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  .divider{
    margin: 0 10px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:nth-of-type(1){
      margin-left: auto;
    }
    &:nth-of-type(2){
      margin-right: auto;
    }
  }
}
</style>
