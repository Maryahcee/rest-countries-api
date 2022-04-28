<template>
  <div>
    <navbar />
    <search-bar />
    <countries />
    <router-link to="/"></router-link> 
  </div>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SearchBar from './components/SearchBar.vue'
import Countries from './components/Countries.vue'

export default ({
  name: 'App',
  components: {
    Navbar,
    SearchBar,
    Countries,
  }
})
</script>

, SearchBar