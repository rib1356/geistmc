<template>
    <nav class="navbar navbar-expand-lg">
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

<style scoped>
    .geist-logo {
        width: 15%;
        margin:auto;
    }

    .navbar {
        padding: 2%;
        display: flex;
        justify-content: space-between;
    }

    .navbar-left {
        color: white;
        font-size: 14px;
    }

    .navbar-collapse {
        flex-grow: 0;
    }

    a {
        color: white;
    }
</style>
  