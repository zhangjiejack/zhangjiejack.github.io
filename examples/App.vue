<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <z-card :imgStr="require('./assets/logo.png')">1232</z-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
