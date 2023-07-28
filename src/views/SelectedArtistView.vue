<script setup>
	import FocusArtistMainImageComponent from '../components/artistComponents/FocusArtistMainImageComponent.vue';
</script>

<template>
    <div class="page-padding">
      <FocusArtistMainImageComponent></FocusArtistMainImageComponent>
    </div>
</template>

<script>
export default {
	name: 'ArtistView',
	components: {
		FocusArtistMainImageComponent,
    
	},
	data() {
		return {
			//We can store all the different focus artist details in here and get them based off a param
			//Would be better to get these details from a database eventually
		}
	},
	mounted () {
		console.log("here");
		console.log(this.$route);
	},
}
</script>
  
<style scoped>

</style>
  