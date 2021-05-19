<template>
    <article class="item" @click="log">
<img :src="imgSrc" class="img" alt="title images">
    <div>
        <h2 :style="{color: '#' + titleColor }">{{titleName}}</h2>
        <p>Tag: {{adx.split(';').join('| ')}}</p>
        <p>Description: {{descr}}</p>
    </div>
</article>
</template>

<script>
    export default {
        name: 'Item',
        props: {
            titleName: {
                type: String
            },
            adx: {
                type: String
            },
            descr: {
                   type: String,
                   default: ''
            },
            imgSrc: {
                type: String,
                    default: 'https://public-files.gumroad.com/variants/an2qxukus7o2nrnoeu0sy6nuphet/dbb60a954a67a47571d40de5d2a1ce1f0996c6a5ea0b74b5cc31dc387ced2987'
            },
            titleColor: {
                type: String
            }
        },
        methods: {
            log (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>
.item{
    display: flex;
   width: 100%;
}
</style>