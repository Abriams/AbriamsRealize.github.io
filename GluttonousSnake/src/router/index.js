import Vue from 'vue'
import Router from 'vue-router'
import GluttonousSnake from "../components/GluttonousSnake/GluttonousSnake.vue";

Vue.use(Router)
export default new Router({
    routes: [
        {
        path: "/",
        name: "GluttonousSnake",
        component: GluttonousSnake
        },
    ]
});
