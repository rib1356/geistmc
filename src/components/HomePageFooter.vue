<template>
    <div v-if="!bottomFooterMove" :class="bottomFooterMove ? 'page-footer-div' : 'image-footer-div'"> <!-- Renders when entire homepage visible-->
        <!-- <div class="home-page-footer">
            <p :class="footerClass()">Find us</p>
            <i :class="footerClass()" class="bi bi-arrow-right" ></i>
            <a href="https://www.instagram.com/Geist.uk/?hl=en" target="_blank" :class="footerClass()">Instagram</a>
            <p :class="footerClass()">|</p>
            <a href="https://www.artsy.net/partner/geist/works" target="_blank" :class="footerClass()">Artsy</a>
            <p :class="footerClass()">|</p>
            <a href="https://www.artnet.com/galleries/geist-galleries/artworks/" target="_blank" :class="footerClass()">Artnet</a>
        </div> -->
    </div>
    <div v-else class='page-footer-div'> <!-- Renders when scrolled and visible at bottom of page-->
        <div class="footer-navigation footer-navigation-left">
            <p :class="footerClass()" @click="scrollToTop()">© Geist Holdings Ltd</p>
        </div>
        <div class="footer-navigation footer-navigation-center">
            <a :class="footerClass()">Subscribe</a>
            <p :class="footerClass()">|</p>
            <a :class="footerClass()">Terms & Conditions</a>
            <p :class="footerClass()">|</p>
            <a :class="footerClass()">Privacy Policy</a>
        </div>
        <div class="footer-navigation footer-navigation-right">
            <a href="https://www.instagram.com/Geist.uk/?hl=en" target="_blank" :class="footerClass()">Instagram</a>
            <a href="https://www.artsy.net/partner/geist/works" target="_blank" :class="footerClass()">Artsy</a>
            <a href="https://www.artnet.com/galleries/geist-galleries/artworks/" target="_blank" :class="footerClass()">Artnet</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageFooter',
    props: {
        bottomFooterAnimation: {
            type: Boolean,
            default: false
        },
        bottomFooterMove: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
    },
    methods:{
        footerClass(){ //Transition the text first after initial scroll then move the footer to the bottom of the page
            if (this.bottomFooterAnimation && !this.bottomFooterMove) {
                return 'footer-text fade-text-out'
            } else if (!this.bottomFooterAnimation && this.bottomFooterMove) {
                return 'footer-text bottom-footer-text'
            } else {
                return 'footer-text fade-text-in'
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
}
}

</script>

<style scoped>
    .image-footer-div {
        width: 100vw;
        position: absolute;
        z-index: 10;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0rem 3rem 1rem 3rem;
    }

    .page-footer-div {
        background-color: transparent;
        width: 100vw;
        z-index: -1;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0rem 3rem 1rem 3rem;
    }

    .footer-text {
        font-size: 12px;
        text-align: center;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
    }

    .fade-text-in {
        color: white;
        transition: 0.3s all ease-out;
    }

    .fade-text-out {
        color: transparent;
        transition: 0.3s all ease-out;
    }

    .bottom-footer-text {
        color: black;
    }

    /* .footer-navigation-left {
        
    } */

    .footer-navigation-center {
        width: 25rem;
        margin-left: 4rem;
    }
    .footer-navigation-right {
        width: 13rem;
    }

    .footer-navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .home-page-footer {
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    a:hover {
        color: #e6e6e6;
        text-decoration: underline;
        cursor: pointer;
    }

    .bottom-footer-text:hover {
        color: black;
        text-decoration: underline;
        cursor: pointer;
    }

    p {
        margin: 0;
    }
</style>