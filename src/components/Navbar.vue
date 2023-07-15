<template>
    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-dark': darkNavbar }">
        <div class="container-fluid">
            <p class="navbar-left">Est. 2011 London, Mayfair | Online Art Sales</p>
            <div class="geist-logo-div">
                <a href="/">
                    <img :src="(`${this.baseURL}images/geistLogoWhite.png`)" alt="geist-logo-white" class="geist-logo" id="giest-logo">
                </a>
            </div>
            <!-- Mobile button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/artists">Artists</a>
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
    name: 'Navbar',
    props: {
        darkNavbar: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
        }
    },
}

</script>

<style scoped>

    .geist-logo-div {
        position: absolute;
        left: 50%;
        margin-left: -90px !important; /* 50% of  logo width */
        display: block;
    }
    .geist-logo {
        width: 180px;
    }

    .navbar {
        padding: 1rem 3rem 1rem 3rem;;
        display: flex;
        justify-content: space-between;
        transition: 0.3s all ease-out;
    }
    .navbar.navbar-dark {
        background-color: black;
    }

    .navbar-dark {
        border-bottom: 1.5px solid white;
        box-shadow: 0 1px 2px 0px white;
    }

    .container-fluid {
        padding: 0;
    }

    .navbar-left {
        color: white;
        font-size: 13px;
        margin-left: 0rem;
        font-family: 'Montserrat-Medium', sans-serif;
    }

    .navbar-collapse {
        flex-grow: 0;
    }

    .nav-link {
        color: white;
        font-size: 13px;
        padding-right: 0 !important;
        padding-left: 1rem !important;
        font-family: 'Montserrat-Medium', sans-serif;
    }

    .nav-link:hover {
        color: #F2F2F2;
        text-decoration: underline;
    }

    p {
        margin-bottom: 0;
    }
</style>
  