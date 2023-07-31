<template>
    <div class="artist-bio">
        <img :src="(`${this.baseURL}images/artists/arturoDiModica/artistView/arturoBio.jpg`)" alt="arturo-bio" class="bio-image"/>
        <p class="artist-quote"><i class="bi bi-quote"></i>My point was to show people that if you want to do something in a moment things are very bad, you can do it. You can do it by yourself. My point was that you must be strong<i class="bi bi-quote quote-right"></i></p>
        <div>
            <p class="artist-quote-subtext">Arturo Di Modica on Charging Bull (1987-89)</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ArtistBioComonent',
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
    .bio-image {
        width: 18vw;
        height: 34vh;
        margin-top: 4px;
    }

    .artist-bio {
        display: flex;
        flex-direction: column;
        width: min-content;
    }

    .artist-quote {
        font-family: 'Montserrat-bold', sans-serif;
        font-size: 16px;
        margin-top: 1rem;
        text-align: end;
    }

    .bi-quote {
        font-size: 24px;
        color: grey;
    }

    .quote-right {
        position: absolute;
    }

    .artist-quote-subtext {
        margin-top: 1rem;
        text-align: end;
        font-family: 'Montserrat-medium', sans-serif;
        color: #808080;
        width: 80%;
        float: right;
    }
</style>
  