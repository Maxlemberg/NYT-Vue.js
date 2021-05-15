<template>
    <button v-on="$listeners" v-bind:type="type" :class="{btn: true, 'btn-reverse': false}">
<slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            type: {
                type: String,
                default: 'button'
            }
        }
    }
</script>

<style scoped>
.btn {
  width: 160px;
  height: 40px;
  background: none;
  color: orangered;
  border: 1px solid orangered;
  cursor: pointer;
  font-size: 18px;
  padding: 8px 15px;
  margin: 0 10px;
  transition: box-shadow 250ms linear, background-color 250ms linear;
}
.btn:hover {
  color: white;
  outline: none;
  background-color: orangered;
  box-shadow: 0  0 5px 5px thistle;
}
.btn-reverse {
     width: 160px;
  height: 40px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 8px 15px;
  margin: 0 10px;
  transition: box-shadow 250ms linear, background-color 250ms linear;
background-color: teal;
color: white;
}
.btn-reverse:hover {
  color: teal;
  outline: none;
  background: none;
  box-shadow: 0  0 5px 5px thistle;
  border: 1px solid teal;
}

</style>