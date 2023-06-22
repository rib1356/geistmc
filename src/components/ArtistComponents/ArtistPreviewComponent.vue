<template>
    <div class="artist-preview-div">
        <h2 class="artist-name">{{this.artistInformation.artistName}}</h2>
        <div>
            <img :src="(`src/assets/images/artists/${this.artistInformation.artistNamePath}/${this.artistInformation.artistImageFileName}`)" :alt="this.artistInformation.artistImageAlt" class="artist-image"/>
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
    mounted () {
    },
}

</script>


  
<style scoped>
    .artist-preview-div {
        margin-bottom: 5rem;
    }
    .artist-name {
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        margin-top: 4rem;
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
  