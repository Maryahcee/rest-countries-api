<template>
  <!--flags-grid-container-->
  <div v-for="country in $store.state.countries" :key="country" class="container max-w-full grid grid-cols-4 grid-flow-col gap-20 m-5 font-['Nunito Sans'] bg-white  ">
     <!--flag01-->
    <div class="flex flex-col items-center mx-auto w-60 h-72 ring-1 ring-black ring-opacity-5 rounded-md">
      <img  class="w-full h-32 mb-4 rounded-t-md" src="../assets/flags/flag.png" alt="flag">
      <!--Info card section-->
      <div  class="container w-3/4 h-38 justify-center items-center mx-auto ">
        <h1 class="font-extrabold mb-2 text-lg">{{ country.name }}</h1>
        <p class="text-md font-normal"> Population: {{ country.population }}</p>
        <p class="text-md font-normal"> Region: {{ country.region }} </p>
        <p class="text-md font-normal">Capital: {{ country.capital }} </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Countries', 
  }

</script>


