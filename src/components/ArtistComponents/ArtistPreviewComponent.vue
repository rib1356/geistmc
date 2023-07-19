<template>
    <div class="artist-preview-div">
        <h2 class="artist-name">{{this.artistInformation.artistName}}</h2>
        <div>
            <img :src="(`${this.baseURL}images/artists/${this.artistInformation.artistNamePath}/${this.artistInformation.artistImageFileName}`)" :alt="this.artistInformation.artistImageAlt" class="artist-image"/>
        </div>
        <p class="image-subtext">{{this.artistInformation.imageSubtext }}</p>
        <p class="artist-text">{{ this.artistInformation.artistText }}</p>
        <a class="view-artist-page">View Artist Page</a>
    </div> 
</template>
<script>
export default {
    name: 'ArtistPreviewComponent',
    props: {
        artistInformation: {
            type: Object
        },
    },
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
        }
    },
    mounted () {
    },
}

</script>


  
<style scoped>
    .artist-preview-div {
        margin-bottom: 3.5rem;
    }
    .artist-name {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
    }

    .artist-image {
		object-fit: cover;
		height: 70vh;
		width: 70vw;
		background-position: center;
  	}

    .image-subtext {
        font-size: 18px;
        font-family: 'Montserrat-Bold', sans-serif;
        margin-bottom: 0;
        margin-top: 1rem;
    }

    .artist-text {
        text-align: justify;
        margin-bottom: 0;
    }

    .view-artist-page {
        float: right;
        font-family: 'Montserrat-Bold', sans-serif;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        margin-top: 0.5rem;
    }
</style>
  