<template>
    <div>
        
    </div>
    <!-- <h2 class="carousel-name">Publications</h2>   -->
    <swiper
        :slidesPerView="4"
        :grid="{
            rows: 2,
        }"
        :spaceBetween="30"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide>
            <a href="https://www.sothebys.com/en/auctions/ecatalogue/2019/contemporary-curated-n10027/lot.316.html" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D3 - Publication Sothebys.jpg`)">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://www.artsy.net/article/artsy-editorial-charging-bull-symbol-new-york-site-activism" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D7 - Publication Artsy.jpg`)">
            </a>
            </swiper-slide>
        <swiper-slide>
            <a href="https://www.phillips.com/detail/arturo-di-modica/UK010718/291" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D4 - Publication Phillips.jpg`)">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://www.bbc.co.uk/news/world-us-canada-39582389" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D8 - Publication BBC.jpg`)">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://www.nytimes.com/2021/02/21/us/arturo-di-modica-dead.html" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D5 - Publication NYT.jpg`)">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://news.artnet.com/art-world/wall-streets-bronze-bull-celebrates-25th-anniversary-198768" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D9 - Publication Artnet.jpg`)">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://www.theartnewspaper.com/2021/02/22/arturo-di-modica-sculptor-behind-new-yorks-charging-bull-has-died-aged-80" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D6 - Publication Art Newspaper.jpg`)">
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="https://www.wsj.com/articles/arturo-di-modica-hoped-his-bull-would-soothe-investors-11614121114" target="_blank">
                <img class="slide-image" :src="(`${this.baseURL}images/publications/D10 - Publication WSJ.jpg`)">
            </a>    
        </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // import required modules
    import { Grid } from 'swiper/modules';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/grid';
    
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      data () {
        return {
            baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
        }
        },
      setup() {
        return {
          modules: [Grid],
        };
      },
    };
  </script>
  
<style scoped>

    .carousel-name {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
    }
    .swiper {
    width: 100%;
    height: 60vh;
    margin-left: auto;
    margin-right: auto;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: grey;
    height: calc((100% - 30px) / 2) !important;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
        height: 100%;
        width: 100%;
        object-fit: fill;
        background-position: center;
    }

</style>