import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'

const routes = [
	{
		path: '/',
		redirect: { name: 'homeView' }
	},
	{
		path: '/geistmc/',
		name: 'homeView',
		component: HomeView
	},
	{
		path: '/geistmc/artists',
		name: 'artistView',
		component: ArtistView
	}
	
]

const router = createRouter({
	history: createWebHistory('/geistmc/'),
	routes
})

export default router
