<template>
  <div id="app">
   <List :items="file"/>
   <Button>Load more</Button>
  </div>
</template>

<script>
import file from './components/list/files'
import List from './components/list/List'
import Button from './components/Button.vue'


export default {
  name: 'App',
  components: {
  List,
  Button
  },
 
   data() {
     return {
       file,
}
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
