import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'

const routes = [
	{
		path: '/',
		name: 'homeView',
		component: HomeView
	},
	{
		path: '/artists',
		name: 'artistView',
		component: ArtistView
	}
]

const router = createRouter({
	history: createWebHistory('/giestmc/'),
	routes
})

export default router
