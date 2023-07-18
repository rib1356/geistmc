<script setup>
  import HomePageImage from '../components/HomePageImage.vue';
  import ArtistPreviewComponent from '../components/artistComponents/ArtistPreviewComponent.vue';
  import ArtworkSeriesComponent from '../components/artworkComponents/ArtworkSeriesComponent.vue';
  import ArtworkCarouselComponent from '../components/artworkComponents/ArtworkCarouselComponent.vue';
</script>

<template>
	<HomePageImage/>
	<div class="page-padding">
		<ArtistPreviewComponent :artistInformation="davidHockneyObject"/>
		<div class="artwork-series-div">
			<ArtworkSeriesComponent :artworkSeriesInformation="artworkSeriesObject.series1"/>
			<ArtworkSeriesComponent :artworkSeriesInformation="artworkSeriesObject.series2"/>
		</div>
		<ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.francisBacon"/>
		<ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.andyWarhol"/>
		<ArtistPreviewComponent :artistInformation="arturoDiModicaObject"/>
		<ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.arturoDiModica"/>
	</div>
</template>

<script>
export default {
	name: 'HomeView',
	components: { 
		HomePageImage, 
		ArtistPreviewComponent,
		ArtworkSeriesComponent,
		ArtworkCarouselComponent
	},
    data () {
        return {
			davidHockneyObject: {
				artistName: "David Hockney",
				artistNamePath: "davidHockney",
				artistImageFileName: "dhPreview.jpg",
				artistImageAlt : "david-hockney-artist-preview",
				imageSubtext: "The Most Important Living Artist",
				artistText: "Born 1937 in Bradford, British artist David Hockney has dominated the international art market for decades. His work has pushed out the boundaries in all the mediums he has worked and his academic studies have contributed to big break throughs with our understanding of the history of art itself. In recent years, Hockney’s digital works have defined his career which is the body of work that Geist has focused on specializing.",
			},
			arturoDiModicaObject: { 
				artistName: "Arturo Di Modica",
				artistNamePath: "arturoDiModica",
				artistImageFileName: "admPreview.jpg",
				artistImageAlt : "arturo-di-modica-artist-preview",
				imageSubtext: "A Maverick From The Start",
				artistText: "Sicilian born, Arturo Di Modica’s work became world famous after he dropped his 16ft bronze Charging Bull outside of the New York Stock Exchange in 1989, with no prior permission. Less well known is that he illegally dropped eight monumental marbles outside of the Rockfeller Center in 1977, built his 5-storey Crosby St studio by hand from salvaged materials and towed his 14ft Il Cavallo on the back of his Ferrari to the Lincoln Center on valentines day 1988. Geist acted as Di Modica’s first official representative until his sad passing in 2021.",
			},
			artworkSeriesObject: { //Should this be included in the davidHockneyObject?
				series1: {
					seriesName: "iPad Drawings: The Arrival of Spring Series (2011)",
					artistNamePath: "davidHockney",
					seriesImageFileName: "dhSpringSeries.jpg",
					seriesImageAlt: "david-hockney-spring-series",
					seriesText: "The Arrival of Spring editions are arguably Hockney’s most commercially successful series. Created around the artists then studio in East Yorkshire, the series comprises of both medium and large-scale works.",
				},
				series2: {
					seriesName: "iPad Drawings: The Yosemite Series (2010-11)",
					artistNamePath: "davidHockney",
					seriesImageFileName: "dhYosemiteSeries.jpg",
					seriesImageAlt: "david-hockney-yosemite-series",
					seriesText: "Created during two trips to the Yosemite Valley, the series was Hockney’s first digital editions to achieve major commercial success. The works marked a big step forward in terms of complexity of the artists exploration with the new iPad medium.",
				},
			},
			artworkCarouselObject: {
				francisBacon: {
					artistName: "Francis Bacon",
					artistFolder: "francisBacon",
					carouselImages: [
						"fbCarousel1.jpg",
						"fbCarousel2.jpg",
						"fbCarousel3.jpg",
						"fbCarousel4.jpg",
						"fbCarousel5.jpg",
					],
					carouselText: [
						{ title: "Figure writing reflected in a mirror 1977", subText: "A male figure in white underwear resembling George Dye"},
						{ title: "Study for a portrait of John Edwards 1986", subText: "A study of the aritsts clocest companion"},
						{ title: "Oedipus and the Sphinx 1984", subText: "A limited edition lithograph series"},
						{ title: "Study for a Portrait of John Edwards 1984", subText: "An important late example of the artists work"},
						{ title: "L’Homme au Lavabo 1978", subText: "Limited edition lithograph series"},
					]
				},
				andyWarhol: {
					artistName: "Andy Warhol",
					artistFolder: "andyWarhol",
					carouselImages: [
						"awCarousel1.jpg",
						"awCarousel2.jpg",
						"awCarousel3.jpg",
						"awCarousel4.jpg",
						"awCarousel5.jpg",
					],
					carouselText: [
						{ title: "Moonwalk 1987", subText: "From the Moonwalk diptych series"},
						{ title: "Superman 1981", subText: "From the Myths series"},
						{ title: "Black Marilyn 1964", subText: "Maybe the most iconic of all the screenprints"},
						{ title: "Black Lenin 1987", subText: "Screenprint on paper"},
						{ title: "MAO 11.96 1972", subText: "Screenprint on paper"},
					]
				},
				arturoDiModica: {
					artistName: "", //Needs to be empty on the home page
					artistFolder: "arturoDiModica",
					carouselImages: [
						"admCarousel1.jpg",
						"admCarousel2.jpg",
						"admCarousel3.jpg",
						"admCarousel4.jpg",
					],
					carouselText: [
						{ title: "Madre de Sicilia 2000", subText: "From the return to abstraction series"},
						{ title: "Early Abstraction 1970", subText: "Recently rediscovered early New York work"},
						{ title: "6ft Charging Bull 1987-89", subText: "Polished bronze created from the original model"},
						{ title: "Il Cavallo 1988", subText: "Towed on the back of the artist's Ferrari to the Lincoln Center"},
					]
				},
			}
        }
    },
}

</script>


<style scoped>

	.artwork-series-div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
	}
</style>
