<template>
    <div style="position: relative;">
        <img :src="(`./src/assets/images/artists/${this.artworkSeriesInformation.artistNamePath}/${this.artworkSeriesInformation.seriesImageFileName}`)" :alt="this.artworkSeriesInformation.seriesImageAlt" class="artwork-series-image"/>
        <p class="artwork-series-name" >{{this.artworkSeriesInformation.seriesName }}</p>
        <p class="artwork-series-text">{{this.artworkSeriesInformation.seriesText }}</p>
        <a class="view-artwork-series" :class="{ 'view-series-offset': this.artworkSeriesInformation.seriesImageFileName == 'dhSpringSeries.jpg' }">View Series</a>
    </div> 
</template>

<script>
export default {
    name: 'ArtworkSeriesComponent',
    props: {
        artworkSeriesInformation: {
            type: Object
        },
    },
    mounted () {
    },
}

</script>

<style scoped>
    .artwork-series-image {
		object-fit: cover;
		height: 40vh;
		width: 32vw;
		background-position: center;
  	}

    .artwork-series-name {
        font-family: 'Montserrat-Bold', sans-serif;
        font-size: 15px;
        margin-bottom: 0;
        margin-top: 0.8rem;
    }

    .artwork-series-text {
        text-align: justify;
        margin-bottom: 0;
        width: 32vw;
    }
    
    .view-artwork-series {
        float: right;
        font-family: 'Montserrat-Bold', sans-serif;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: 0.5rem;
    }

    .view-series-offset {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>