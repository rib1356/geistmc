<template>
    <div :class="bottomFooter ? 'page-footer-div' : 'image-footer-div'">
        <div class="footer-navigation footer-navigation-left">
            <p class="footer-text" :style="bottomFooter ? 'color:black;' : 'color:white;'">© Geist Holdings Ltd</p>
        </div>
        <div class="footer-navigation footer-navigation-center">
            <a class="footer-text" href="#" :style="bottomFooter ? 'color:black;' : 'color:white;'">Subscribe</a>
            <p class="footer-text" :style="bottomFooter ? 'color:black;' : 'color:white;'">|</p>
            <a class="footer-text" href="#" :style="bottomFooter ? 'color:black;' : 'color:white;'">Terms & Conditions</a>
            <p class="footer-text" :style="bottomFooter ? 'color:black;' : 'color:white;'">|</p>
            <a class="footer-text" href="#" :style="bottomFooter ? 'color:black;' : 'color:white;'">Privacy Policy</a>
        </div>
        <div class="footer-navigation footer-navigation-right">
            <a class="footer-text" href="#" :style="bottomFooter ? 'color:black;' : 'color:white;'">Instagram</a>
            <a class="footer-text" href="#" :style="bottomFooter ? 'color:black;' : 'color:white;'">Artsy</a>
            <a class="footer-text" href="#" :style="bottomFooter ? 'color:black;' : 'color:white;'">Artnet</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageFooter',
    props: {
        bottomFooter: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
    },
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
        padding: 1rem;
    }

    .page-footer-div {
        background-color: transparent;
        width: 100vw;
        z-index: -1;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
    }

    .footer-text {
        color: white;
        font-size: 14px;
        text-align: center;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
    }

    /* .footer-navigation-left {
        
    } */
    
    .footer-navigation-center {
        width: 33%;
        margin-left: 4rem;
    }
    .footer-navigation-right {
        width: 18%;
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