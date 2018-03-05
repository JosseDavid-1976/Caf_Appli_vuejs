<template>
  <div id="app">
    <img src="src/images/david_monkon.jpg">
    <h1>{{ titre }}</h1>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titre: 'Un petit caf dans ta gueule vuejs'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
