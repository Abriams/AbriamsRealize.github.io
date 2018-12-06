import Vue from 'vue'
import Router from 'vue-router'
import SlidingValide from '../components/Sliding validation/SlidingValide.vue';
Vue.use(Router)
export default new Router({
    routes: [
        {
        path: "/",
        name: "SlotSlidingValidedemo",
        component: SlidingValide
        },
    ]
});
