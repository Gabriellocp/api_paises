<template>
    <v-container fluid>
        <div style="display: flex">
            <div style="background-color:black">
                <v-img 
                max-height="50%"
                max-width="50%"
                :src="country.flags.png"
                >

                </v-img>
            </div>
            <div>
                <ul>
                    <li> Nome: {{country.name.official}} </li>
                    <li> Capital: {{country.capital}} </li>
                    <li> Regiao: {{country.region}} </li>
                    <li> Sub-Região: {{country.name}} </li>
                    <li> População: {{country.name}} </li>
                    <li> Línguas: {{country.name}} </li>
                </ul>
            </div>
        </div>
        <div>
            <p> Países Vizinhos </p>
        </div>
    </v-container>
   
</template>

<script>
export default {
    props:{
        country: Array
    },
    data() {
        return {
            neighbors: []
        }
    },
}
</script>