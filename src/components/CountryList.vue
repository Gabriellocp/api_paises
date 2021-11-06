<template>
    <v-container fluid>
        <v-row justify="center">
            <v-img 
            style="margin: 0 1rem 1rem 0"
            max-height="20rem"
            max-width="20rem"
            contain
            aspect-ratio="1.5"
            v-on:click="redirectToCountry(displayCountries[index+(maxNumber*(page-1))].name.official)" 
            class="flag-image" 
            v-for="(country,index) in maxNumber"
            :key="index"
            :src="displayCountries[index+(maxNumber*(page-1))].flags.png"
            > </v-img>
        
            <div class="text-center">
                <v-pagination
                color="#6D2080"
                v-model="page"
                :length="Math.ceil(displayCountries.length/maxNumber)"
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
        }
    },
    methods:{
        redirectToCountry(name){
            console.log(name)
            this.$emit('change-screen', name)
        },
    },

   
}
</script>

