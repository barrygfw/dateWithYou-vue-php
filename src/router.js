import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/About.vue'),
		},
		{
			path: '/DateWithYou',
			name: 'DateWithYou',
			component: () => import('./views/DateWithYou.vue'),
			redirect: '/DateWithYou/home',
			children: [
				{
					path: '/DateWithYou/home',
					component: () => import('./views/DateWithYouHome.vue'),
				},
				{
					path: '/DateWithYou/home',
					component: () => import('./views/About.vue'),
				},
				{
					path: '/DateWithYou/login',
					component: () => import('./views/Login.vue'),
				},
				{
					path: '/DateWithYou/setting',
					component: () => import('./views/Setting.vue'),
				},
				{
					path: '/DateWithYou/write',
					component: () => import('./views/Write.vue'),
				},
				{
					path: '/DateWithYou/detail',
					component: () => import('./views/Detail.vue'),
				},
			],
		},
	],
});
