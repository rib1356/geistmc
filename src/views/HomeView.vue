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
		<ArtworkCarouselComponent />
		<ArtistPreviewComponent :artistInformation="arturoDiModicaObject"/>
	</div>
</template>

<script>
export default {
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
			}
        }
    },
}

</script>


<style scoped>
	.page-padding {
		padding: 5% 15% 5% 15%;
	}

	.artwork-series-div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
	}
</style>
