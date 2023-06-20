<template>
    <div>
        <h2 class="artist-name">David Hockney</h2>
        <div>
            <img src="../../assets/images/artists/davidHockney/dh-preview.jpg" alt="david-hockney-home-page" class="artist-image"/>
        </div>
        <p class="image-subtext">The Most Important Living Artist</p>
        <p class="artist-text">Born 1937 in Bradford, British artist David Hockney has dominated the international art
                                market for decades. His work has pushed out the boundaries in all the mediums he has worked
                                and his academic studies have contributed to big break throughs with our understanding of the
                                history of art itself. In recent years, Hockney’s digital works have defined his career which is
                                the body of work that Geist has focused on specializing.</p>
        <a class="view-artist-page">View Artist Page</a>
        
    </div> 
  </template>
  
<style>
    .artist-name {
        text-transform: uppercase;
    }

    .artist-image {
		object-fit: cover;
		height: 70vh;
		width: 80vw;
		background-position: center;
  	}

    .image-subtext {
        font-size: 18px;
        font-family: 'Montserrat-Bold', sans-serif;
        margin-bottom: 0;
        margin-top: 0.5rem;
    }

    .artist-text {
        text-align: justify;
        margin-bottom: 0;
    }

    .view-artist-page {
        float: right;
        font-family: 'Montserrat-Bold', sans-serif;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
  