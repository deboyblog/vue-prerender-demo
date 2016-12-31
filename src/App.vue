<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>Welcome to your Vue.js app! </p>
    <p>
      <a v-link="{name: 'titleFromRouterDefine'}">路由定义标题</a> |
      <a v-link="{name: 'titleFromBackendResponse'}">异步获取标题</a> |
      <a v-link="{name: 'contentFromBackendResponse'}">异步获取内容</a>
    </p>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Hello from './components/Hello'
  export default {
    components: {
      Hello
    },
    ready () {
    }
  }
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

</style>
