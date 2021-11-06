<template>
    <div data-app>
        <v-container fluid>
            <v-row align="center">
                <v-col cols="10" sm="3">
                    <v-select
                    v-model="firstfilter"
                    :items="filterItems"
                    item-text="name"
                    item-value="value"
                    label="Filtrar por"
                    return-object
                    color="#6D2080"
                    dense
                    v-on:change="filterSelected()"
                    >
                    </v-select>
                </v-col>
            
                <v-col cols="10" sm="3">
                    <v-select v-if="isRegion"
                    v-model="secondFilter"
                    :items="regionValues"
                    item-text="name"
                    item-value="value"
                    label="Escolha uma opção"
                    color="#6D2080"
                    dense
                    >
                    </v-select>

                    <v-text-field
                    v-if="isInputFilter"
                    label="Filtrar"
                    v-model="secondFilter"
                    color="#6D2080"
                    dense
                    >
                    </v-text-field>
                </v-col>

                <v-col cols="10" sm="2">
                    <v-btn style="color:#FFFFFF"
                    elevation="2"
                    color="#6D2080"
                    :disabled=validateSearch
                    v-on:click="searchCountry()"
                    >
                    Pesquisar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
 
</template>

<script>
export default {
    name: 'FilterObject',
    data() {
        return {
        isInputFilter: "",
        isRegion: false,
        firstfilter: {}, 
        filterItems:[
           {name:"Região", value: "region"},
           {name:"Capital", value: "capital"},
           {name:"Língua", value: "language"},
           {name:"País", value: "country"},
           {name:"Código de Ligação", value: "callcode"},
        ],
        secondFilter: "",
        regionValues:[
            {name:"África", value: "africa"},
            {name:"Américas", value: "america"},
            {name:"Ásia", value: "asia"},
			{name:"Europa", value: "europe"},
			{name:"Oceania", value: "oceania"}
        ]
        }
    },
    methods:{
        filterSelected(){
            this.secondFilter = "";
            var selection = this.firstfilter.value;
            selection === "region" ?
            (this.isRegion = true,
            this.isInputFilter = false) : 
            (this.isInputFilter = true,
            this.isRegion = false)
        },
        searchCountry(){
            this.$emit('searchcountry', `${this.firstfilter['value']}/${this.secondFilter}`)
            console.log(`${this.firstfilter['value']}/${this.secondFilter}`)
        }
    },
    computed:{
        validateSearch(){
            return this.secondFilter==""?
            true : false
        }
    }
    
}
</script>