<template>
    <div class="focus-artists-div">
        <h2 class="focus-artists-text">Focus Artists</h2>
        <div class="focus-image-flex">
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/1ArturoDiModica.jpg`)" alt="arturo-di-modica-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/2DavidHockney.jpg`)" alt="david-hockney-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/3AndyWarhol.jpg`)" alt="andy-warhol-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/4Banksy.jpg`)" alt="banksy-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/5FrancisBacon.jpg`)" alt="francis-bacon-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/6SalvadorDali.jpg`)" alt="salvador-dali-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/7YayoiKusama.jpg`)" alt="yayoi-kusama-focus-artist" class="artist-image"/>
            </div>
            <div class="focus-image">
                <img :src="(`${this.baseURL}images/artists/focusArtists/8RoyLichtenstein.jpg`)" alt="roy-lichtenstein-focus-artist" class="artist-image"/>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name: 'FocusArtistsComponent',
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
    .focus-artists-div {
        margin-bottom: 1.5rem;
    }
    .focus-artists-text {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
    }

    .focus-image-flex {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }

    .focus-image {
        width: 16vw;
        height: 35vh;
        border: 1.5px solid black;
        margin-bottom: 1.7rem;
    }

    .artist-image {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

</style>
  