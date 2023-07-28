<template>
    <div :class="hover ? 'focus-image-hover' : 'focus-image'" @mouseover="hover = true" @mouseleave="hover = false" @click="navigateToArtist()">
        <img :src="(`${this.baseURL}images/artists/focusArtists/${focusArtistImagePath}`)" :alt="(`${focusArtistName}-focus-image`)" :class="hover ? 'artist-image-hover' : 'artist-image'"/>
        <span v-if="hover" class="focus-image-text">{{ focusArtistName }}</span>
    </div>
</template>

<script>
import router from '../../router';

export default {
    name: 'FocusArtistImageComponent',
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
            hover: false,
        }
    },
    props: {
        focusArtistImagePath: {
            type: String
        },
        focusArtistName: {
            type: String
        },
    },
    methods: {
        navigateToArtist() {
            // router.push({ name: this.focusArtistPageView, params: { artistName: this.focusArtistName }, query: { artistName: this.focusArtistName } , hash: '#focusArtist'});
            router.push({ name: 'selectedArtistView', params: { artistName: this.focusArtistName}});
            // router.push({ name: this.focusArtistPageView});
        }
    },
}
</script>

<style scoped>
    .focus-image {
        width: 16vw;
        height: 32vh;
        border: 1px solid #DFDFDF;
        margin-bottom: 1.7rem;
        position: relative;
        text-align: center;
        color: white;
    }

    .focus-image-hover {
        background: black;
        width: 16vw;
        height: 32vh;
        border: 1px solid #DFDFDF;
        margin-bottom: 1.7rem;
        position: relative;
        text-align: center;
        color: white;
    }
    .artist-image {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .focus-image-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Montserrat-Bold', sans-serif;
        font-size: 20px;
    }

    .artist-image-hover {
        opacity: 30%;
        object-fit: cover;
        height: 100%;
        width: 100%;
        transition: 0.25s ease-out;
    }

</style>
  