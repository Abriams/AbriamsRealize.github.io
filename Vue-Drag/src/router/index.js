import Vue from 'vue'
import Router from 'vue-router'
import Drag from '../components/drag/drag.vue';
Vue.use(Router)

export default new Router({
    routes: [
        {
        path: "/",
        name: "Drag",
        component: Drag
        },
    ]
});
