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
                :focusArtistName="artist.artistName"
                :focusArtistPageView="artist.focusArtistPageView">
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
                { imagePath: "1ArturoDiModica.jpg", artistName: "Arturo Di Modica", focusArtistPageView: "arturoFocusArtistView" },
                { imagePath: "2DavidHockney.jpg", artistName: "David Hockney", focusArtistPageView: "davidFocusArtistView" },
                { imagePath: "3AndyWarhol.jpg", artistName: "Andy Warhol", focusArtistPageView: "andyFocusArtistView" },
                { imagePath: "4Banksy.jpg", artistName: "Banksy", focusArtistPageView: "banksyFocusArtistView" },
                { imagePath: "5FrancisBacon.jpg", artistName: "Francis Bacon", focusArtistPageView: "francisFocusArtistView" },
                { imagePath: "6SalvadorDali.jpg", artistName: "Salvador Dali", focusArtistPageView: "salvadorFocusArtistView" },
                { imagePath: "7YayoiKusama.jpg", artistName: "Yayoi Kusama", focusArtistPageView: "yayoiFocusArtistView" },
                { imagePath: "8RoyLichtenstein.jpg", artistName: "Roy Lichtenstein", focusArtistPageView: "royFocusArtistView" }
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
  