<template>
    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-dark': darkNavbar }">
        <div class="container-fluid">
            <p class="navbar-left">Est. 2011, Mayfair | Online Art Sales</p>
            <div class="geist-logo-div">
                <img src="../../src/assets/images/geistLogoWhite.png" alt="geist-logo-white" class="geist-logo" id="giest-logo">
            </div>
            <!-- Mobile button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Artists</a>
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

    .container-fluid {
        padding: 0;
    }

    .navbar-left {
        color: white;
        font-size: 14px;
        font-family: 'Montserrat-Bold', sans-serif;
        margin-left: 0rem;
    }

    .navbar-collapse {
        flex-grow: 0;
    }

    .nav-link {
        color: white;
        font-family: 'Montserrat-Bold', sans-serif;
        font-size: 14px;
        padding-right: 0 !important;
        padding-left: 1rem !important;
    }

    .nav-link:hover {
        color: #F2F2F2;
        text-decoration: underline;
    }

    p {
        margin-bottom: 0;
    }
</style>
  