<template>
	<div class="home-page-div">
		<div class="main-image"></div>
	</div>
</template>

<script>
export default {
  name: 'HomePageImage',
}
</script>
  
<style scoped>
  	.main-image {
		background-image: url('/images/homePageChargingBull.jpg');
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
  