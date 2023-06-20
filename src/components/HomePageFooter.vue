<template>
    <div :class="bottomFooterMove ? 'page-footer-div' : 'image-footer-div'">
        <div class="footer-navigation footer-navigation-left">
            <p :class="footerClass()">© Geist Holdings Ltd</p>
        </div>
        <div class="footer-navigation footer-navigation-center">
            <a :class="footerClass()">Subscribe</a>
            <p :class="footerClass()">|</p>
            <a :class="footerClass()">Terms & Conditions</a>
            <p :class="footerClass()">|</p>
            <a :class="footerClass()">Privacy Policy</a>
        </div>
        <div class="footer-navigation footer-navigation-right">
            <a :class="footerClass()">Instagram</a>
            <a :class="footerClass()">Artsy</a>
            <a :class="footerClass()">Artnet</a>
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
        }
}
}

</script>

<style scoped>
    .image-footer-div {
        width: 100vw;
        position: absolute;
        z-index: -1;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
        font-size: 14px;
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

    a:hover {
        color: #e6e6e6;
        text-decoration: underline;
        cursor: pointer;
    }
</style>