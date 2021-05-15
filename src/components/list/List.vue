<template>
<Container>
    <div>
<Item class="list" v-for="{id, title, adx_keywords, abstract, media } in items" :key="id" 
:titleName="title" 
:adx='adx_keywords' 
:descr="abstract" 
:imgSrc='media[0].mediametadata[2].url'/>
    </div>
    </Container>
</template>

<script>
import Item from '../NYT-items/Item'
import Container from '../schared/Container'

    export default {
        name: 'ItemsList',
        components: {
            Item,
            Container
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
.list {
  margin-bottom: 20px;
}

</style>