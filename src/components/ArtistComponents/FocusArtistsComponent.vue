<script setup>
    import FocusArtistImageComponent from './FocusArtistImageComponent.vue';
</script>
<template>
    <div class="focus-artists-div">
        <h2 class="focus-artists-text">Focus Artists</h2>
        <div class="focus-image-flex">
            <FocusArtistImageComponent 
                v-for="artist in focusArtists" 
                :key="artist.artistName"
                :focusArtistImagePath="artist.imagePath" 
                :focusArtistName="artist.artistName">
            </FocusArtistImageComponent>
        </div>
    </div> 
</template>
<script>
export default {
    name: 'FocusArtistsComponent',
    components: {
        FocusArtistImageComponent
    },
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
            focusArtists: [
                { imagePath: "1ArturoDiModica.jpg", artistName: "Arturo Di Modica" },
                { imagePath: "2DavidHockney.jpg", artistName: "David Hockney" },
                { imagePath: "3AndyWarhol.jpg", artistName: "Andy Warhol" },
                { imagePath: "4Banksy.jpg", artistName: "Banksy" },
                { imagePath: "5FrancisBacon.jpg", artistName: "Francis Bacon" },
                { imagePath: "6SalvadorDali.jpg", artistName: "Salvador Dali" },
                { imagePath: "7YayoiKusama.jpg", artistName: "Yayoi Kusama" },
                { imagePath: "8RoyLichtenstein.jpg", artistName: "Roy Lichtenstein" }
            ]
        }
    },
    mounted () {
    },
}

</script>

<style scoped>
    .focus-artists-div {
        margin-bottom: 1.5rem;
    }
    .focus-artists-text {
        margin-bottom: 1.5rem;
    }

    .focus-image-flex {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
  