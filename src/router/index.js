import { createRouter, createWebHistory } from 'vue-router';
//TESTS
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/SetUser/LoginPage";
import RegistrationPage from "@/pages/SetUser/RegistrationPage";
import MainAdminPage from "@/pages/MainAdminPage";
//LEARNING
import TheFirst from "@/pages/Chapter1/TheFirst"
import TheSecond from "@/pages/Chapter1/TheSecond";
import TheThird from "@/pages/Chapter1/TheThird";
import TheFirst2 from "@/pages/Chapter2/TheFirst2";
import TheSecond2 from "@/pages/Chapter2/TheSecond2";
import TheFirst3 from "@/pages/Chapter3/TheFirst3";
import TheSecond3 from "@/pages/Chapter3/TheSecond3";
import TheFirst4 from "@/pages/Chapter4/TheFirst4";



// creating routes to all pages
const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	},
	{
		path: '/login',
		name: 'LoginPage',
		component: LoginPage
	},
	{
		path: '/registration',
		name: 'RegistrationPage',
		component: RegistrationPage
	},
	{
		path: '/adminPage',
		name: 'MainAdminPage',
		component: MainAdminPage
	},
	{
		path: '/1.1',
		name: '1.1',
		component: TheFirst
	},
	{
		path:'/1.2',
		name:'1.2',
		component: TheSecond
	},
	{
		path:'/1.3',
		name:'1.3',
		component: TheThird
	},
	{
		path:'/2.1',
		name:'2.1',
		component: TheFirst2
	},
	{
		path:'/2.2',
		name:'2.2',
		component: TheSecond2
	},
	{
		path:'/3.1',
		name:'3.1',
		component: TheFirst3
	},
	{
		path:'/3.2',
		name:'3.2',
		component: TheSecond3
	},
	{
		path:'/4.1',
		name:'4.1',
		component: TheFirst4
	}
];

// creating Vue-Router instance with normal history mode
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;