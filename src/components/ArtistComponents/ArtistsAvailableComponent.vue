<template>
    <div class="artists-available-div">
        <h2 class="artist-available-text">Works Available By</h2>
        <p>PLACEHOLDER: A list of artists will go here</p>
    </div> 
</template>
<script>
export default {
    name: 'ArtistsAvailableComponent',
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
    .artists-available-div {
        margin-bottom: 5rem;
    }
    .artists-available-text {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
    }
</style>
  