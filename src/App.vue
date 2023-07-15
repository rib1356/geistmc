<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HomeView from './views/HomeView.vue'
import Navbar from './components/Navbar.vue'
import HomePageFooter from './components/HomePageFooter.vue'
</script>

<template>
	<Navbar v-bind:darkNavbar="darkNavbar || currentRouteName != 'homeView'"></Navbar>
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
		currentRouteName() {
			return this.$route.name;
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

<style scoped>

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
