import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'
import SelectedArtistView from '../views/SelectedArtistView.vue'

const routes = [
	{
		path: '/',
		redirect: { name: 'homeView' }
	},
	{
		path: '/',
		name: 'homeView',
		component: HomeView
	},
	{
		path: '/artists',
		name: 'artistView',
		component: ArtistView
	},
	{
		path: '/artists/selected-artist',
		name: 'selectedArtistView',
		component: SelectedArtistView,
	}
]

const router = createRouter({
	history: createWebHistory('/geistmc/'),
	routes
})

export default router
