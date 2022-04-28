import { createStore } from 'vuex'
import axios from 'axios'
import countriesApi from '../apis'

export default createStore({
    state: {
        // Define state variables as properties here
        countries: [
            {
                name: "Aland Island",
                population: "25,785",
                capital: "Mariehamn",
                region: "Europe",
            },
        ]
    },
    mutations: {
        // Mutation handlers (pass state object)
        countriesUpdate(state, payload) {
            let newCountries = state.countries
            state.countries = newCountries(payload)
        }
    },
    getters: {
        countries: state =>{
            return state.countries
        }
        
    },
    actions: {
        // Actions (pass context object)
        
      
}
})
