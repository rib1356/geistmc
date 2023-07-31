<template>
    <div class="artwork-carousel-div">
        <h2 class="carousel-name">{{  this.artworkCarousel.artistName }}</h2>  
        <swiper     
        class="swiper-container my-gallery"
        :modules="modules"
        :slides-per-view="this.artworkCarousel.slidesPerView"
        :space-between="20"
        :free-mode="true"
        :slides-offset-after="this.artworkCarousel.slidesOffsetAfter"
        :keyboard="{
            enabled: true,
        }"
        :mousewheel="{
            enabled: true,
            forceToAxis: true,
            sensitivity: 0.75,
        }"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }"
        :scrollbar="{ draggable: true }"
        id="artworkSlider">
            <swiper-slide v-for="(n, i) in this.artworkCarousel.carouselImages.length" :key="i" class="w-fit"> 
                <div>
                    <img class="slide-image" :src="(`${this.baseURL}${this.artworkCarousel.artistFolder}/${this.artworkCarousel.carouselImages[i]}`)">
                    <p v-if="this.artworkCarousel.carouselText.length != 0" class="carousel-title">{{ this.artworkCarousel.carouselText[i].title }}</p>
                    <p v-if="this.artworkCarousel.carouselText.length != 0" class="carousel-subtext">{{ this.artworkCarousel.carouselText[i].subText }}</p>
                </div>
            </swiper-slide>
        </swiper>        
    </div>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Keyboard, Mousewheel } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/scrollbar';
  import 'swiper/css/keyboard';
  import 'swiper/css/mousewheel'
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
            slidesPerView: 3.5 //TODO: Need to see if I can get this to scale on screenwidth - I know I can with the element (breakpoints?)
        }
    },
    mounted () {
    },
    setup() {
        return {
            modules: [Navigation, Pagination, Scrollbar, A11y, FreeMode, Keyboard, Mousewheel],
        };
    },
}
</script>


  
<style scoped>
    .artwork-carousel-div {
        margin-bottom: 3rem;
        margin-top: 4rem;
    }

    .carousel-name {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
    }

    .swiper {
        width: 100%;
        height: 50vh;
    }

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
        width: 100%;
        object-fit: fill;
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


    .carousel-title {
        font-family: 'Montserrat-Bold', sans-serif;
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0.5rem;
    }
    .carousel-subtext {
        font-size: 10px;
        margin-bottom: 0;
        margin-top: 0.1rem;
    }

    .swiper-button-next {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    color: #888888 !important;
    --swiper-navigation-size: 20px;
    }

</style>
  