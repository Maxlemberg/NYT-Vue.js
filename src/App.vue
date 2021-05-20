<template>
  <div id="app">
<Header />
   <List />
   <!-- <Button>Load more</Button> -->
  </div>
  
</template>

<script>
import List from './components/list/List'
import Header from './components/Header'
import {getPopularNews} from './services/newsPaper.service'


export default {
  name: 'App',
  components: {
  List,
  Header
  },
 
//    data() {
//      return {
//        file: [],
// }
//    },
    async created () {
        try {
          const response = await getPopularNews();
          // console.log(response);
          const data = [];
           response.forEach(el => el.media.forEach(m => m["media-metadata"].forEach((item, idx) =>{
             if(idx===2) { data.push({media:item.url, id:el.id, adx_keywords: el.adx_keywords, abstract: el.abstract,  title: el.title, titleColor: Math.floor(Math.random()*16777215).toString(16)})
             }}))
           );
            
             this.$store.commit('setNews', data);
          // console.log(this.file);
        } catch (error) {
            console.log(error);
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
