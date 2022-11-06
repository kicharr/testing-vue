import { createRouter, createWebHistory } from 'vue-router';
//TESTS
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/SetUser/LoginPage";
import RegistrationPage from "@/pages/SetUser/RegistrationPage";
import BurgerTest from "@/pages/BurgerTest";
//LEARNING
import TheFirst from "@/pages/Chapter1/TheFirst"
import TheSecond from "@/pages/Chapter1/TheSecond";
import TheThird from "@/pages/Chapter1/TheThird";
import TheFirst2 from "@/pages/Chapter2/TheFirst2";
import TheSecond2 from "@/pages/Chapter2/TheSecond2";
import TheFirst3 from "@/pages/Chapter3/TheFirst3";
import TheSecond3 from "@/pages/Chapter3/TheSecond3";
import TheFirst4 from "@/pages/Chapter4/TheFirst4";
import TheSecond4 from "@/pages/Chapter4/TheSecond4";
import TheThird4 from "@/pages/Chapter4/TheThird4";
import TheFourth4 from "@/pages/Chapter4/TheFourth4";
import TheFirst5 from "@/pages/Chapter5/TheFirst5";
import TheSecond5 from "@/pages/Chapter5/TheSecond5";



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
		path: '/burger',
		name: 'BurgerTest',
		component: BurgerTest
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
	},
	{
		path:'/4.2',
		name:'4.2',
		component: TheSecond4
	},
	{
		path: '/4.3',
		name:'4.3',
		component: TheThird4
	},
	{
		path:'/4.4',
		name: '4.4',
		component: TheFourth4
	},
	{
		path:'/5.1',
		name:'5.1',
		component: TheFirst5
	},
	{
		path:'/5.2',
		name:'5.2',
		component: TheSecond5
	}
];

// creating Vue-Router instance with normal history mode
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;