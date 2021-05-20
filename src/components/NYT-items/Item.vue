<template>
    <article class="item" >
<img :src="imgSrc" class="img" alt="title images">
    <div class="container">
        <h2 class="title" :style="{color: '#' + titleColor}">{{titleName}}</h2>
        <p class="container-tag"><span v-if="adx" class="tag">Tag:</span> {{adx.split(';').join(' | ')}}</p>
        <p class="container-tag"><span v-if="descr" class="tag">Description:</span> {{descr}}</p>
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
        }
    }
</script>

<style scoped>
@media screen and (min-width: 799px) {
    .title{
    text-align: center;
    font-weight: 900;
}
.item{
    padding: 10px;
    display: flex;
   width: 100%;
}
.tag{
    font-size: 20px;
    font-weight: 700;
}
.container{
    padding: 20px;
    text-align: start;
}
.container-tag{
    display: inline-block;
    margin: 20px 0 0;
    padding: 0;
  }
}

@media screen and (max-width: 798px) {
.img{
    max-width: 300px;
}
.item{
    padding: 10px;
}
}
.container{
    padding: 20px;
}
.title{
    text-align: center;
    font-weight: 800;
}
.container-tag{
    display: inline-block;
    margin: 20px 0 0;
    padding: 0;
}
.tag{
    font-size: 18px;
    font-weight: 700;
}

</style>