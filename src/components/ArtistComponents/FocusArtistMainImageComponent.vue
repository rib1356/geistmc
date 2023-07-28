<template>
	<div class="home-page-div">
		<div class="main-image"></div>
	</div>
</template>

<script>
export default {
  name: 'FocusArtistMainImageComponent',
  data() {
    return {
        baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
    }
  }
}
</script>
  
<style scoped>
  	.main-image {
		background-image: url('/images/artists/arturoDiModica/artistView/arturoMainImage.jpg');
		background-size: cover;
		height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		background-position: center;
  	}

	.home-page-div {
		display: flex;
		flex-direction: column;
		height: 90vh;
	}
</style>
  