import { http } from "./config"

export default{
    listCountries: (value) =>{
        return http.get(`https://restcountries.com/v3.1/${value}`)
    }
}