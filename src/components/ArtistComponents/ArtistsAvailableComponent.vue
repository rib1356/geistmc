<template>
    <div class="artists-available-div">
        <h2 class="artist-available-text">Works Available By</h2>
        <div class="available-artists">
            <div class="artist-col-1">
                <p v-for="artist in this.artistsCol1">{{ artist }}</p>
            </div>
            <div class="artist-col-2">
                <p v-for="artist in this.artistsCol2">{{ artist }}</p>
            </div>
            <div class="artist-col-3">
                <p v-for="artist in this.artistsCol3">{{ artist }}</p>
            </div>
            <div class="artist-col-4">
                <p v-for="artist in this.artistsCol4">{{ artist }}</p>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name: 'ArtistsAvailableComponent',
    data () {
        return {
			baseURL: import.meta.env.PROD === true ? '' : '/', //Used as base URL for images as annoyingly local images need /
            artistsCol1: [
                "Alberto Giacometti",
                "Alex Katz",
                "Anish Kapoor",
                "Antony Gormley",
                "Auguste Rodin",
                "Carlos Cruz-Diez",
                "Christopher Wool",
                "Chuck Close",
                "Cy Twombly",
                "Damien Hirst",
                "David Mach",
                "Donald Judd",
                "Eddie Martinez",
                "Egon Schiele",
            ],
            artistsCol2: [
                "Fernando Botero",
                "Frank Auerbach",
                "Frank Stella",
                "Georg Baselitz",
                "George Condo",
                "Gerhard Richter",
                "Glenn Brown",
                "Henri Matisse",
                "Henry Moore",
                "Jean Michel Basquiat",
                "Jeff Koons",
                "Joan Miro",
                "Joseph Beuys",
                "Kaws",
            ],
            artistsCol3: [
                "Keith Haring",
                "L.S. Lowry",
                "Louise Bourgeois",
                "Lucian Freud",
                "Luciano Fontana",
                "Marc Chagall",
                "Marc Quinn",
                "Max Ernst",
                "Nic Fiddian Green",
                "Nicolas Party",
                "Pablo Picasso",
                "Richard Prince",
                "Robert Indiana",
                "Robert Rauschenberg",
            ],
            artistsCol4: [
                "Russell Young",
                "Sam Francis",
                "Tom Wesselmann",
                "Tony Cragg",
                "Vincent van Gogh",
                "Wassily Kandinsky",
                "Willem de Kooning",
                "Yves Klein",
            ],
        }
    },
    mounted () {
    },
}

</script>

<style scoped>
    .artists-available-div {
        margin-bottom: 5rem;
    }
    .artists-available-text {
        margin-bottom: 1.5rem;
        margin-top: 2rem;
    }

    .available-artists {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    p {
        margin-bottom: 2px;
        font-family: 'Montserrat-Medium', sans-serif;
        font-size: 13px;
    }
</style>
  