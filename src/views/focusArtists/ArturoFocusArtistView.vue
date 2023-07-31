<script setup>
	import FocusArtistMainImageComponent from '../../components/artistComponents/FocusArtistMainImageComponent.vue';
    import ArtworkCarouselComponent from '../../components/artworkComponents/ArtworkCarouselComponent.vue';
    import ArtistBioComonent from '../../components/artistComponents/ArtistBioComponent.vue';
</script>

<template>
    <div class="page-padding">
        <FocusArtistMainImageComponent :focusArtistMainImagePath="'arturoDiModica/artistView/arturoMainImage.jpg'"></FocusArtistMainImageComponent>
        <div class="artist-name-div">
            <h2>Arturo Di Modica</h2>
            <p class="artist-name-subtext">(1941-2021)</p>
        </div>
        <div class="artist-navigation"> <!-- TODO: Make this into a component!-->
            <p>Biography</p>
            <p>|</p>
            <p>Publications</p>
            <p>|</p>
            <p>Moments</p>
            <p>|</p>
            <p>Artworks</p>
        </div>
        <div class="artist-information-div"> <!-- TODO: make this a component as well if all of the other artist are the same ye? -->
            <div class="artist-information-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue est ut lectus bibendum maximus. Pellentesque et augue porttitor, tempor erat efficitur, semper diam. Nulla vehicula convallis enim, sed finibus mauris varius ut. Aenean eget leo et est molestie commodo. Mauris commodo rhoncus dui, non varius enim tempor vitae. Donec quis dignissim massa, eget sagittis diam. Vestibulum sed lacus quis libero ullamcorper placerat. <br>
                    Ut id ipsum euismod, finibus est nec, aliquam sem. Fusce vestibulum tellus et arcu maximus dignissim. Nunc vitae ipsum mollis, suscipit augue sit amet, auctor erat. Aliquam facilisis euismod metus ut tincidunt. Praesent vitae gravida quam, sit amet vestibulum orci. Suspendisse posuere neque neque, vel viverra odio viverra et. Cras nibh nunc, viverra ac pharetra ut, gravida at magna. Sed pulvinar lectus et felis mollis faucibus. Mauris at lectus porta purus malesuada lacinia sed semper ex. Donec sed sapien purus. Donec nec elit mi. Praesent metus lectus, porta in leo vel, posuere tincidunt dui. Nullam blandit quis mi ut sagittis. Proin quis semper nibh. Maecenas neque arcu, pellentesque sed consequat quis, pharetra sed enim. Quisque ornare consectetur tellus auctor lacinia. <br>
                </p>
                <div class="artist-information-actions"> 
                    <p class="read-more" onclick="alert('Ill expand and show more text')">READ MORE...</p>
                    <button class="btn btn-secondary enquire-button">ENQUIRE</button>
                </div>
            </div>
            <ArtistBioComonent></ArtistBioComonent>
        </div>
        <div class="artist-name-div">
            <h2>Publications</h2>
        </div>
        <ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.carousel1"/>
        <ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.carousel2"/>
        <ArtworkCarouselComponent :artworkCarousel="artworkCarouselObject.carousel3"/>
    </div>
</template>

<script>
export default {
	name: 'ArturoFocusArtistView',
	components: {
		FocusArtistMainImageComponent,
        ArtworkCarouselComponent,
        ArtistBioComonent,
	},
	data() {
		return {
            baseURL: import.meta.env.PROD === true ? '' : '/', //For some reason this is undefined in here but defined during mount - wtf??/
            artworkCarouselObject: {
				carousel1: {
					artistName: "Monumental Works",
					artistFolder: "images/artists/arturoDiModica/artistView/carousel1",
					slidesPerView: 2.5,
					slidesOffsetAfter: 50,
					carouselImages: [
						"D12 - ADM1.jpg",
						"D13 - ADM2.jpg",
						"D14 - ADM3.jpg",
					],
					carouselText: []
				},
                carousel2: {
					artistName: "Edition Works",
					artistFolder: "images/artists/arturoDiModica/artistView/carousel2",
					slidesPerView: 3.5,
					slidesOffsetAfter: -200,
					carouselImages: [
						"D15 - ADM4.jpg",
						"D16 - ADM5.jpg",
						"D17 - ADM6.jpg",
						"D18 - ADM7.jpg",
						"D19 - ADM8.jpg",
					],
					carouselText: []
				},
                carousel3: {
					artistName: "Early Abstraction",
					artistFolder: "images/artists/arturoDiModica/artistView/carousel3",
					slidesPerView: 3.5,
					slidesOffsetAfter: 125,
					carouselImages: [
						"D20 - ADM9.jpg",
						"D21 - ADM10.jpg",
						"D22 - ADM11.jpg",
						"D23 - ADM12.jpg",
					],
					carouselText: []
				},
			}
		}
	},
}
</script>
  
<style scoped>
    .artist-name-div {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        align-items: center;
    }

    .artist-name-subtext {
        margin-left: 0.5rem;
        font-family: 'Montserrat-medium', sans-serif;
    }

    .artist-navigation {
        display: flex;
        flex-direction: row;
        margin-bottom: 1.5rem;
        width: 45vw;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
    }

    .artist-information-div {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .artist-information-text {
        width: 45vw;
        text-align: justify;
    }

    .artist-information-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1.5rem;
        align-items: center;
    }

    .read-more {
        font-family: 'Montserrat-medium', sans-serif;
        font-size: 16px;
        cursor: pointer;
    }

    .enquire-button {
        background-color: black;
        padding: 0 15px 0 15px;
        border-radius: 2px;
    }

    p {
        margin-bottom: 0;
    }
</style>
  