<template>
    <div class="artwork-carousel-div">
        <h2 class="carousel-name">Francis Bacon</h2>
        <div>
            <!-- <img :src="(`${this.baseURL}images/artists/${this.artistInformation.artistNamePath}/${this.artistInformation.artistImageFileName}`)" :alt="this.artistInformation.artistImageAlt" class="artist-image"/> -->
        </div>
        <div class="text-center">
            <div class="row mx-auto my-auto justify-content-center">
                <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active"> <!-- TODO: Should make this a component as well so it can be looped through and added for as many images needed -->
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-img">
                                        <img :src="(`${this.baseURL}images/artists/francisBacon/fbCarousel1.jpg`)" alt="francis-bacon-1" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-img">
                                        <img :src="(`${this.baseURL}images/artists/francisBacon/fbCarousel2.jpg`)" alt="francis-bacon-2" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-img">
                                        <img :src="(`${this.baseURL}images/artists/francisBacon/fbCarousel3.jpg`)" alt="francis-bacon-3" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-img">
                                        <img :src="(`${this.baseURL}images/artists/francisBacon/fbCarousel4.jpg`)" alt="francis-bacon-4" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-img">
                                        <img :src="(`${this.baseURL}images/artists/francisBacon/fbCarousel5.jpg`)" alt="francis-bacon-5" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name: 'ArtworkCarouselComponent',
    props: {
        // artistInformation: {
        //     type: Object
        // },
    },
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
        }
    },
    mounted () {
        let items = document.querySelectorAll('.carousel .carousel-item')

        items.forEach((el) => {
            const minPerSlide = 4
            let next = el.nextElementSibling
            for (var i=1; i<minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })

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

    @media (max-width: 767px) {
        .carousel-inner .carousel-item > div {
            display: none;
        }
        .carousel-inner .carousel-item > div:first-child {
            display: block;
        }
    }

    .carousel-inner .carousel-item.active,
    .carousel-inner .carousel-item-next,
    .carousel-inner .carousel-item-prev {
        display: flex;
    }

    /* medium and up screens */
    @media (min-width: 768px) {
        
        .carousel-inner .carousel-item-end.active,
        .carousel-inner .carousel-item-next {
        transform: translateX(25%);
        }
        
        .carousel-inner .carousel-item-start.active, 
        .carousel-inner .carousel-item-prev {
        transform: translateX(-25%);
        }
    }

    .carousel-inner .carousel-item-end,
    .carousel-inner .carousel-item-start { 
    transform: translateX(0);
    }
</style>
  