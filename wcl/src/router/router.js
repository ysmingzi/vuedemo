import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import DaYi from '../views/daYi.vue'
import faXian from '../views/faXian.vue'
import My from '../views/My.vue'
// import PosSlect from "../views/PosSlect.vue"
import headerClass from "../components/First/headerClass.vue"
import ShengBei from "../components/First/ShengBei.vue"
import shengbeiJiangzuo from "../components/First/shengbei-jiangzuo.vue"
import shengbeiSectionZhengZhi from "../components/First/shengbei-sectionZhengZhi.vue"
import Shop from "../views/Shop.vue"
import dengLu from "../views/dengLu.vue"
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		// 一课部分
		{
			path: "/",
			redirect: "home"
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			children: [
				{
					path:"/home",
					redirect:"ShengBei"
				},
				{
					path: 'jiangZuo',
					name: 'shengbeiJiangzuo',
					component: shengbeiJiangzuo
				},
				{
					path: 'zhengZhi',
					name: 'shengbeiSectionZhengZhi',
					component: shengbeiSectionZhengZhi
				},
				{
					path: 'ShengBei',
					name: 'ShengBei',
					component: ShengBei
				},
// 				{
// 					path:'PosSlect',
// 					name:'PosSlect',
// 					component:PosSlect
// 				}
			]
		},
		
		// 答疑部分
		{
			path: '/dayi',
			name: 'DaYi',
			component: DaYi
		},
		
		
		
		
		
		
		
		
		
		
		
		
		
		{
			path: '/faXian',
			name: 'faXian',
			component: faXian
		},
		{
			path: '/My',
			name: 'My',
			component: My
		},
		{
			path: '/class',
			name: 'headerClass',
			component: headerClass
		},
		{
			path:'/shop',
			name:"Shop",
			component:Shop
		},
		{
			path:'/dengLu',
			name:"dengLu",
			component:dengLu
		}
		
	]
})
