import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Focus artists main page
import ArtistView from '../views/ArtistView.vue'
//Individual focus artist pages
import ArturoFocusArtistView from '../views/focusArtists/ArturoFocusArtistView.vue'

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
		path: '/arturo-di-modica',
		name: 'arturoFocusArtistView',
		component: ArturoFocusArtistView,
	}
]

const router = createRouter({
	history: createWebHistory('/geistmc/'),
	routes
})

export default router
