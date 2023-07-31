<script setup>
	import FreeValuationComponent from '../components/FreeValuationComponent.vue';
	import FocusArtistsComponent from '../components/artistComponents/FocusArtistsComponent.vue';
	import ArtistsAvailableComponent from '../components/artistComponents/ArtistsAvailableComponent.vue';
	import ArtworkCarouselComponent from '../components/artworkComponents/ArtworkCarouselComponent.vue';
</script>

<template>
    <div class="page-padding">
		<FocusArtistsComponent></FocusArtistsComponent>
		<FreeValuationComponent></FreeValuationComponent>
		<ArtistsAvailableComponent></ArtistsAvailableComponent>
		<ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.davidHockney"/>
		<ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.banksy"/>
		<ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.salvadorDali"/>
    </div>
</template>

<script>
export default {
	name: 'ArtistView',
	components: {
		FreeValuationComponent,
		FocusArtistsComponent,
		ArtistsAvailableComponent,
		ArtworkCarouselComponent
	},
	data() {
		return {
			artworkCarouselObject: {
				davidHockney: {
					artistName: "David Hockney",
					artistFolder: "images/artists/davidHockney",
					slidesPerView: 3.5,
					slidesOffsetAfter: -30,
					carouselImages: [
						"dhCarousel1.jpg",
						"dhCarousel2.jpg",
						"dhCarousel3.jpg",
						"dhCarousel4.jpg",
						"dhCarousel5.jpg",
					],
					carouselText: [
						{ title: "Arrival of Spring 30 March 2011", subText: "iPad drawing on paper"},
						{ title: "Yosemite II 2011", subText: "Large scale iPad drawing"},
						{ title: "Yosemite 12 2010", subText: "Regular size iPad from Yosemite"},
						{ title: "Glass Vase, Jug, and Wheat 2020", subText: "iPad drawing from My Normandy"},
						{ title: "A Bigger Green Valley 2008", subText: "From the Computer Drawings series"},
					]
				},
				banksy: {
					artistName: "Banksy",
					artistFolder: "images/artists/banksy",
					slidesPerView: 2.5,
					slidesOffsetAfter: 75,
					carouselImages: [
						"banksyCarousel2.jpg",
						"banksyCarousel3.jpg",
						"banksyCarousel4.jpg",
						"banksyCarousel1.jpg",
					],
					carouselText: [
						{ title: "Banksquiat 2019", subText: "Limited edition of 300"},
						{ title: "Morons 2007", subText: "Signed screenprint in colors"},
						{ title: "Flag 2006", subText: "Early screenprint in colors"},
						{ title: "Flower Thrower Triptych 2019", subText: "Limited edition of 300"},
					]
				},
				salvadorDali: {
					artistName: "Salvador Dali", //Needs to be empty on the home page
					artistFolder: "images/artists/salvadorDali",
					slidesPerView: 3.5,
					slidesOffsetAfter: 0,
					carouselImages: [
						"sdCarousel1.jpg",
						"sdCarousel2.jpg",
						"sdCarousel3.jpg",
						"sdCarousel4.jpg",
					],
					carouselText: [
						{ title: "Duncan's Horses 1946", subText: "Original drawing on paper"},
						{ title: "Portrait of Macbeth 1946", subText: "Original drawing on paper"},
						{ title: "Cancer 1966", subText: "Water color and gouache on card"},
						{ title: "The Holy Trinity 1960", subText: "Rediscovered by Geist in 2015"},
					]
				},
			}
		}
	}
}
</script>
  
<style scoped>

</style>
  