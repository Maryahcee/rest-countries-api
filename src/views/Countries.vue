<template>
  <div class="home">
    <countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from '../components/Countries.vue'

export default {
  name: 'Countries',
  components: {
   Countries
   
  }
}
</script>
