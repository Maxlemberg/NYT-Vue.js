<template>
    <div class="container">
<slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'container'
    }
</script>

<style  scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

</style>