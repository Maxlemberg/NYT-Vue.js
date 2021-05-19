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
      //  img: []
}
   },
    async created () {
        try {
          const response = await getPopularNews();
          console.log(response);
          const data = [];
           response.forEach(el => el.media.forEach(m => m["media-metadata"].forEach((item, idx) =>{
             if(idx===2) {
                data.push({media:item.url, id:el.id, adx_keywords: el.adx_keywords, abstract: el.abstract,  title: el.title, titleColor: Math.floor(Math.random()*16777215).toString(16)})
             }}))) ;
          this.file = data;
          console.log(this.file);
           
           ///id, title, adx_keywords, abstract, media
         
        
        } catch (error) {
            console.log(error);
        } finally {
         
          // console.log(this.file[0].media[0]["media-metadata"][2].url);
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
