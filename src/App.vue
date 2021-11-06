<template>
  <div>
    <div > <Navigation /></div>
    <div style="margin: 2rem 0  0 5rem"> <FilterObject v-on:searchcountry="getCountries" /></div>
    <div style="margin: 0 5rem 0 5rem"> 
      <CountryList 
    v-if="allCounties[0]" 
    :displayCountries="allCounties"
     />
     </div>
    <!-- <div> <FlagScreen /> </div> -->
  </div>
 
</template>

<script>
import Navigation from "./components/Navigation.vue"
import FilterObject from "./components/FilterObject.vue"
import CountryList from "./components/CountryList.vue"
import Countries from "./services/countries"
//import FlagScreen from "./components/FlagScreen.vue"
export default {
  name: 'App',
  components: {
    Navigation,
    FilterObject,
    CountryList,
   // FlagScreen
  },

  data: () => ({
    allCounties: []
  }), 
 created(){
   this.getCountries("all")
  },
  methods:{
    async getCountries(value){
      return await Countries.listCountries(value).then(response=> {
        this.allCounties = response.data
      })
    },
  },watch:{
    allCounties(){
      console.log(this.allCounties)
    }
  }
  
};
</script>
