<template>
    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-dark': !showNavbar }">
        <div class="container-fluid">
            <p class="navbar-left">Est 2011, Mayfair | Global Art Sales Online</p>
            <img src="../../src/assets/images/geistLogoWhite.png" alt="geist-logo-white" class="geist-logo">
            <!-- Mobile button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Artists</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Publications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },
    data () {
        return {
        showNavbar: true,
        lastScrollPosition: 0
        }
    },
    methods: {
        onScroll () {
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return
            }
            //Display navbar after scrolling certain amount
            //TODO: this should only be the case on the home page
            this.showNavbar = currentScrollPosition < 30
        }
    }
}

</script>

<style scoped>
    .geist-logo {
        width: 15%;
        margin:auto;
    }

    .navbar {
        padding: 2%;
        display: flex;
        justify-content: space-between;
        transition: 0.3s all ease-out;
    }
    .navbar.navbar-dark {
        background-color: black;
    }

    .navbar-left {
        color: white;
        font-size: 14px;
    }

    .navbar-collapse {
        flex-grow: 0;
    }

    .nav-link {
        color: white;
        font-family: 'Montserrat-Bold', sans-serif;
    }

    .nav-link:hover {
        color: #F2F2F2;
        text-decoration: underline;
    }

    p {
        margin-bottom: 0;
    }
</style>
  