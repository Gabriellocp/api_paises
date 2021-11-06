<template>
  <div>
    <div> 
      <Navigation
      v-on:go-firstpage="goBack()"
    /></div>
    <div v-if="isFirstPage">
      <div> 
        <FilterObject 
        v-on:searchcountry="getCountries" 
        /></div>
      <div> 
        <CountryList 
      :maxNumber="12"
      v-if="allCounties[0]" 
      :displayCountries="allCounties"
      v-on:change-screen="infoScreen"
      />
      </div>
      </div> 
    <div v-if="isFlagScreen">
    <FlagScreen 
    :v-if="allCounties"
    :info="allCounties"
    v-on:change-screen="infoScreen"
    v-on:region-filter="goToRegion"
    /> </div>
  </div>
 
</template>

<script>
import Navigation from "./components/Navigation.vue"
import FilterObject from "./components/FilterObject.vue"
import CountryList from "./components/CountryList.vue"
import Countries from "./services/countries"
import FlagScreen from "./components/FlagScreen.vue"
export default {
  name: 'App',
  components: {
    Navigation,
    FilterObject,
    CountryList,
    FlagScreen
  },

  data: () => ({
    allCounties: [],
    isFirstPage: true,
    isFlagScreen: false
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
    goBack(){
      this.isFirstPage = true
      this.isFlagScreen = false
      this.getCountries('all')
      console.log(this.isFirstPage, this.isFlagScreen)
    },
    infoScreen(val){
      this.allCounties = val
      this.isFlagScreen = true
      this.isFirstPage = false
    },
    goToRegion(val){
      this.isFirstPage = true
      this.isFlagScreen = false
      this.getCountries(`region/${val}`)
    }
  },  

  watch:{
    allCounties(){
      console.log(this.allCounties)
    }
  }
};
</script>
