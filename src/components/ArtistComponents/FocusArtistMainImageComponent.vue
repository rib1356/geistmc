<template>
	<div class="home-page-div">
		<div class="main-image-div">
            <img :src="(`${this.baseURL}images/artists/${this.focusArtistMainImagePath}`)" :alt="(`focus-artist-main-image`)" class="main-image"/>
        </div>
	</div>
</template>

<script>
export default {
  name: 'FocusArtistMainImageComponent',
  props: {
    focusArtistMainImagePath: {
        type: String
    },
  },
  data() {
    return {
        baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
    }
  },
  mounted() {
  }
}
</script>
  
<style scoped>
    .main-image {
        object-fit: cover;
        height: 100vh;
        width: 100vw;
        /* background-position: center; */
        position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
    }

	.home-page-div {
		display: flex;
		flex-direction: column;
		height: 90vh;
	}
</style>
  