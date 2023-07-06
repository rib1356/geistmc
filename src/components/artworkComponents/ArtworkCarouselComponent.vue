<template>
    <div class="artwork-carousel-div">
        <swiper     
        :modules="modules"
        :slides-per-view="auto"
        :space-between="30"
        :slides-offset-after="0"
        :free-mode="true"
        navigation
        :scrollbar="{ draggable: true }">
            <swiper-slide>
                <img class="swiper-image" :src="(`${this.baseURL}images/artists/${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[0]}`)">
            </swiper-slide>
            <swiper-slide>
                    <img class="swiper-image" :src="(`${this.baseURL}images/artists/${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[1]}`)">
            </swiper-slide>
            <swiper-slide>
                    <img class="swiper-image" :src="(`${this.baseURL}images/artists/${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[2]}`)">
            </swiper-slide>
            <swiper-slide>
                    <img class="swiper-image" :src="(`${this.baseURL}images/artists/${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[3]}`)">
            </swiper-slide>
            <swiper-slide>
                    <img class="swiper-image" :src="(`${this.baseURL}images/artists/${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[4]}`)">
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
export default {
    name: 'ArtworkCarouselComponent',
    components: {
        Swiper,
        SwiperSlide,
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
            imagesLoaded: false,
        }
    },
    mounted () {
        console.log(this.artworkCarousel);
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y, FreeMode],
        };
    },
}
</script>


  
<style scoped>
    .artwork-carousel-div {
        margin-bottom: 3rem;
        margin-top: 3rem;
    }

    .swiper {
        max-height: 300px;
        height: 300px
    }

    /* .swiper-slide {
        max-height: auto;
    } */
    .swiper-slide img {
        object-fit: contain;
        max-height: 100%;
        background-position: center;
    }

/* .swiper-slide {
  width: 80%;
}

.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
} */


</style>
  