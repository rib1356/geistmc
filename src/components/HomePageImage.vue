<script setup>
  import HomePageFooter from '../components/HomePageFooter.vue';
</script>

<template>
	<div class="home-page-div">
		<div class="main-image"></div>
		<HomePageFooter/>
	</div>
</template>
  
<style scoped>
  	.main-image {
		background-image: url('../assets/images/homePageChargingBull.jpg');
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
  