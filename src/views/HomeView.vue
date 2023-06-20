<script setup>
  import HomePageImage from '../components/HomePageImage.vue';
  import ArtistPreview from '../components/ArtistComponents/ArtistPreview.vue';
</script>

<template>
	<HomePageImage/>
	<div class="page-padding">
		<ArtistPreview/>
		<hr>
	</div>
</template>


<style scoped>
	.page-padding {
		padding: 10% 10% 5% 10%;
	}
</style>
