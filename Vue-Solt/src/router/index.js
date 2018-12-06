import Vue from 'vue'
import Router from 'vue-router'
import Slotdemo from "@/components/slot/slotdemo";

Vue.use(Router)
export default new Router({
  routes: [
	{
		path: "/",
		name: "Slotdemo",
		component: Slotdemo
    }
  ]
});
