
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            counter : 0
        }
    },
    mutations: {
        addCounter(state, data){
            state.counter +=data;
        },
        subtractCounter(state,data){
            state.counter -= data;
        }
        
    },
    actions: {
        async addRandomNumber(random){
            const RANDOM_NUMBER_URL = "https://www.random.org/integers/?num=1&min=-100&max=100&col=1&base=10&format=plain&rnd=new"
            let number = await axios.get(RANDOM_NUMBER_URL)
            random.commit('addCounter' , number.data)
        }
        
    },
    getters: {
        
    }
})

export default store;