<template>
    <div class="artwork-carousel-div">
        <h2 class="carousel-name">{{  this.artworkCarousel.artistName }}</h2>
        <vueper-slides
            class="no-shadow"
            autoplay
            :duration="2500"
            :fixedHeight="true"
            :visible-slides="3"
            :slide-ratio="1 / 4"
            :gap="3"
            :dragging-distance="50"
            :infinite="true"
            :arrows="false"
            v-if="this.imagesLoaded"
            >
            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"/>
        </vueper-slides>
    </div>
</template>
<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    export default {
        name: 'ArtworkCarouselComponent',
        components: { 
            VueperSlides, 
            VueperSlide 
        },
        props: {
            artworkCarousel: {
                type: Object
            },
        },
        data () {
            return {
                baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
                slides: [],
                imagesLoaded: false
            }
        },
        mounted () {
            this.artworkCarousel.carouselImages.forEach(carouselImg => {
                this.slides.push({ image: `${import.meta.env.PROD === true ? '' : '/'}images/artists/${this.artworkCarousel.artistFolder}/${carouselImg}` })
            });
            this.imagesLoaded = true;
        },
    }

</script>


  
<style scoped>
    .artwork-carousel-div {
        margin-bottom: 3rem;
    }
    .carousel-name {
        text-transform: uppercase;
        margin-bottom: 1rem;
        margin-top: 4rem;
    }

    .artist-image {
		object-fit: cover;
		height: 70vh;
		width: 70vw;
		background-position: center;
  	}

      .vueperslides--fixed-height { height: 50vh; }
</style>
  