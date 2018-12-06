<template>
  <div id="app">
    <!-- <Navigation></Navigation>
    <transition :name="transitionName"><router-view/></transition> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style>
@import "./style/base.styl";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.container {
    margin-top: 20px;
}
</style>
