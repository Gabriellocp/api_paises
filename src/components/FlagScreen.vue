<template>
    <v-container fluid>
        <div style="display: flex; justify-content:center">
            
                <v-img 
                style="margin: 0 1rem 1rem 0"
                max-height="30rem"
                max-width="30rem"
                contain
                aspect-ratio="2.0"
                :src="nextInfo.flags.png"
                >
                </v-img>
           
            <div>
                <ul class="show-info">
                    <li> Nome: {{nextInfo.name.official}} </li>
                    <li> Capital: {{nextInfo.capital[0]}} </li>
                    <li> Regiao: 
                        <a class="stylelink"
                        v-on:click="goToRegion">
                        {{nextInfo.region}}
                        </a> 
                    </li>
                    <li> Sub-Região: {{nextInfo.subregion}} </li>
                    <li> População: {{nextInfo.population}} </li>
                    <li> Línguas: 
                        <span 
                        v-for="(items) in nextInfo.languages"
                        :key="items"
                        >
                        {{items}},
                        </span> 
                    </li>
                </ul>
            </div>
        </div>
        <div style="margin:auto">
            <p> Países Vizinhos </p>
            <CountryList 
            v-if="neighbors"
            :displayCountries="neighbors"
            :maxNumber="12"
            v-on:change-screen="changeCountry"
            />
        </div>
    </v-container>
   
</template>

<script>
import Countries from "../services/countries"
import CountryList from "./CountryList.vue"
export default {
    props:{
        info: Object
    },
    components:{
        CountryList
    },
    data() {
        return {
            neighbors: [],
            nextInfo: Object
        }
    },
    mounted(){
        this.nextInfo = this.info
        this.getNeighbors()
    },
    methods:{
       getNeighbors(){
        this.neighbors = []
        this.nextInfo?.borders.forEach(element => {
            Countries.listCountries(`alpha/${element}`)
            .then(response=>{
                 this.neighbors.push(response.data[0])
             })
        
        });
       },
       changeCountry(val){
        this.neighbors = []
        this.nextInfo = val
        this.getNeighbors()
       }, 
       goToRegion(){
           console.log(this.nextInfo.region)
           this.$emit('region-filter', this.nextInfo.region)
       }
    }
}
</script>

<style>
.show-info{
    list-style-type: none;
}
.show-info li{
    font-size: 20px;
}
div p{
    font-size: 22px;
    text-align: center;
}
.stylelink:hover{
    color:#6D2080;
    cursor: pointer;
}
</style>