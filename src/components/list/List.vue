<template>
<Container>
    <div>
<Item class="list" v-for="{id, title, adx_keywords, abstract, media, titleColor} in this.$store.state.newsPaper" 
:key="id" 
:titleName="title"
:titleColor="titleColor"
:adx='adx_keywords' 
:descr="abstract" 
:imgSrc='media'
/>
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