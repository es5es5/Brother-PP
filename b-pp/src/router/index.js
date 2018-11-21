import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
	linkActiveClass: 'active',
	mode: 'history',
	routes: [
		{
			// path: '/',
			// redirect: '/gift/histories',
			// component: PinesLayout,
			children: [
				// ...ContractRoutes
            ]
        }
	]
})

export default router
