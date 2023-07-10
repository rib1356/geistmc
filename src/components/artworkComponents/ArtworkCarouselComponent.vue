<template>
    <div class="artwork-carousel-div">
        <h2 class="carousel-name">{{  this.artworkCarousel.artistName }}</h2>  
        <swiper     
        class="swiper-container my-gallery"
        :modules="modules"
        :slides-per-view="auto"
        :space-between="20"
        :free-mode="true"
        :slides-offset-after="0"
        :observe-parents="true"
        :observer="true"
        navigation
        :scrollbar="{ draggable: true }">
        <!-- <div class="swiper-wrapper"> -->
            <swiper-slide v-for="(n, i) in this.artworkCarousel.carouselImages.length" :key="i" class="w-fit"> 
                <div>
                    <img class="slide-image" :src="(`${this.baseURL}images/artists/${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[i]}`)">
                    <p>Hello</p>
                </div>
            </swiper-slide>
        <!-- </div> -->

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
            slidesPerView: 3.5
        }
    },
    mounted () {
        this.slidesPerView = (this.artworkCarousel.carouselImages.length / 2) + 0.25;
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
        width: 100%;
        height: 300px
    }

    /* .swiper-slide img {
        object-fit: cover;
        background-position: center;
        width: 100%;
        height: 350px;
        aspect-ratio: 3/2;
    } */


    /* .swiper-container {
        max-width: 100%;
    } */

    .w-fit {
        width: fit-content !important;
    }

    .swiper-container{
        width: 100%;
    }
    .swiper-wrapper {
        width: 100%;
    }

    .swiper-slide img {
        height: 40vh;
        width: auto;
        object-fit: cover;
        background-position: center;
    }
    .my-gallery figure {
    margin: 0px;
    }

    .swiper-slide {
        text-align: left;
        font-size: 12px;
        background: #fff;
        width: min-content;
        /* width: fit-content !important; */
        /* width: -webkit-min-content!important;
        width: -moz-min-content!important;
        width: min-content!important; */
    }


</style>
  