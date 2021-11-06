<template>
    <v-container fluid>
        <v-row justify="center">
            <v-img 
            style="margin: 0 1rem 1rem 0"
            max-height="20rem"
            max-width="20rem"
            contain
            aspect-ratio="1.5"
            v-on:click="redirectToCountry(country.name.official)" 
            class="flag-image" 
            v-for="(country,index) in showMaxNumber"
            :key="index"
            :src="country.flags.png"
            > </v-img>
        
            <div class="text-center">
                <v-pagination
                color="#6D2080"
                v-model="page"
                :length="Math.ceil(displayCountries.length/maxNumber)"
                v-on:input="showCountries()"
                ></v-pagination>
            </div>
        </v-row>
        
    </v-container>
</template>

<script>
export default {
    props:{
        displayCountries: Array,
    },
    data() {
        return {
            page: 1,
            maxNumber: 10,
            showMaxNumber: []
        }
    },
    methods:{
        redirectToCountry(name){
            console.log(name)
            this.$emit('change-screen', name)
        },
        showCountries(){
            
            this.showMaxNumber = this.displayCountries.slice((this.page-1)*this.maxNumber,this.page*this.maxNumber)
            

        }
    },
    mounted(){
        this.showCountries()
    },
    watch:{
        displayCountries(){
            this.showCountries()
        }
    }
   
}
</script>

