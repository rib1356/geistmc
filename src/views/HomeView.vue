<script setup>
  import HomePageImage from '../components/HomePageImage.vue';
  import ArtistPreview from '../components/artistComponents/ArtistPreview.vue';
</script>

<template>
	<HomePageImage/>
	<div class="page-padding">
		<ArtistPreview/>
	</div>
</template>


<style scoped>
	.page-padding {
		padding: 9% 15% 5% 15%;
	}
</style>
