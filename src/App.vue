<template>
  <div id="app">
<Header />
   <List :items="file" />
   <Button>Load more</Button>
  </div>
  
</template>

<script>
import List from './components/list/List'
import Button from './components/Button.vue'
import Header from './components/Header'
import {getPopularNews} from './services/newsPaper.service'


export default {
  name: 'App',
  components: {
  List,
  Button,
  Header
  },
 
   data() {
     return {
       file: [],
}
   },
     async created() {
      try {
          const {data} = await getPopularNews();
          this.file = data.results;
      } catch (error) {
          console.log(error)
      }
   },
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
