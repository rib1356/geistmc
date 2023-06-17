<template>
    <div class="footer-div">
        <div class="footer-navigation footer-navigation-left">
            <p class="footer-text">Geist Holdings Ltd</p>
        </div>
        <div class="footer-navigation footer-navigation-center">
            <a class="footer-text" href="#">Subscribe</a>
            <p class="footer-text">|</p>
            <a class="footer-text" href="#">Terms & Conditions</a>
            <p class="footer-text">|</p>
            <a class="footer-text" href="#">Privacy Policy</a>
        </div>
        <div class="footer-navigation footer-navigation-right">
            <a class="footer-text" href="#">Instagram</a>
            <a class="footer-text" href="#">Artsy</a>
            <a class="footer-text" href="#">Artnet</a>
        </div>
    </div>
</template>

<style scoped>
    .footer-div {
        width: 100vw;
        position: absolute;
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

    .footer-navigation-left {
        margin-left: 1rem;
    }
    .footer-navigation-center {
        width: 33%;
        margin-left: 4rem;
    }
    .footer-navigation-right {
        margin-right: 2rem;
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