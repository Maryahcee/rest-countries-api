<template>
 <section class="pt-5 container max-w-full font-['Nunito Sans'] flex">
   <!-- search bar -->
    <div class="w-1/3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-center items-center bg-white h-16 m-5 px-5  rounded-md">
        <input placeholder="Search for a country" type="text" class="italic rounded-md p-2 w-full outline-none">
    </div>
    <!-- Drop-down -->
    <div class="mx-auto mr-8 text-Light-Mode-Input bg-white m-3 pt-5  rounded-md">
        <div class="w-full inline-block text-left ">
          <div>
            <button @click="toggle(this.isOpen=!this.isOpen)" type="button" class=" inline-flex  w-full rounded-md ring-1 ring-black ring-opacity-5 outline-none  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
               Filter by Region
              <!-- Heroicon name: solid/chevron-down -->
              <svg class="-mr-1 ml-16 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>  
        </div>
        <div class=" origin-top-right absolute right-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="hidden py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Africa</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">America</a>
            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Asia</a>
          </div>
      </div>
      
    </div>
       
 </section>
</template>

<script>
export default {

}
</script>

<style>

</style>