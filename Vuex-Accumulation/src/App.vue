<template>
  <div id="app">
    <router-view/>
    <!-- <Cart/>
    <Info/>
    <List/> -->
  </div>
</template>

<script>
import Cart from './components/Shop/Cart/Cart.vue'
import Info from './components/Shop/Info/Info.vue'
import List from './components/Shop/List/list.vue'
import Count from './components/count'
export default {
  name: 'App',
  components: {Count, Cart, Info, List}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.count{
  background-color: red;
}
</style>