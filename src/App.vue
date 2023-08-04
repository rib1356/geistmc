<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import HomePageFooter from './components/HomePageFooter.vue'
</script>

<template>
	<Navbar v-bind:darkNavbar="darkNavbar || displayNavbar"></Navbar>
  	<router-view @scroll="onScroll"></router-view>
	<HomePageFooter v-bind:bottomFooterAnimation="bottomFooterAnimation" v-bind:bottomFooterMove="bottomFooterMove"></HomePageFooter>
</template>

<script>
export default {
    mounted () {
        window.addEventListener('scroll', this.onScroll);;
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll);
    },
	computed: {
		displayNavbar() {
      if (this.$route.name == 'arturoFocusArtistView'|| this.$route.name == 'homeView') {
        return false;
      }
			return true;
		},
	},
    data () {
        return {
          darkNavbar: false,
          bottomFooter: false,
          bottomFooterMove: false,
        }
    },
    methods: {
      onScroll () {
            //TODO: See if we can only call this scroll event on the home page?
            // THIS IS DEFINITELY GOING TO BE IMPORTANT FOR PERFORMANCE -- DO asap
            // Get the current scroll position
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 0) {
                return;
            }
            //Change the navbars css to display differently after scrolling certain amount
            this.darkNavbar = currentScrollPosition > 1;
            this.bottomFooterAnimation = currentScrollPosition > 1 && currentScrollPosition < 50;
            this.bottomFooterMove = currentScrollPosition > 50;
      },
    }
}

</script>

<style>

  .page-padding {
    padding: 9% 15% 5% 15%
  }

</style>
