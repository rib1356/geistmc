<script setup>
	import FreeValuationComponent from '../components/FreeValuationComponent.vue';
	import FocusArtistsComponent from '../components/artistComponents/FocusArtistsComponent.vue';
	import ArtistsAvailableComponent from '../components/artistComponents/ArtistsAvailableComponent.vue';
</script>

<template>
    <div class="page-padding">
		<FreeValuationComponent></FreeValuationComponent>
    	<FocusArtistsComponent></FocusArtistsComponent>
		<ArtistsAvailableComponent></ArtistsAvailableComponent>
    </div>
</template>

<script>
export default {
	name: 'ArtistView',
	components: {
		FreeValuationComponent,
		FocusArtistsComponent,
		ArtistsAvailableComponent
	},
}
</script>
  
<style scoped>

</style>
  