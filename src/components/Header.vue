<template>
    <header class="header">
<Container>
    <Logo/>
</Container>
    </header>
</template>

<script>
import Container from './schared/Container'
import Logo from './schared/Logo'
    export default {
        name: 'Header',
        components: {
            Container,
            Logo
        }
    }
</script>

<style scoped>
.header {
    top: 0;
    left: 0;
    width: 100%;
    background: teal;
    margin-bottom: 30px;
    /* padding: 16px 0; */
}
</style>