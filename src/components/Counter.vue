<template>
    <div>
      <h1>My Vuex Counter</h1>
      <h1 class="counter"> {{counter}}</h1>

      <button @click="subtractCounter(parseInt(value))">-</button>
      <input type="number" v-model="value">
      <button @click="addCounter(parseInt(value))" >+</button>

      <div>
            <button class="btn" @click="addRandomNumber">Add by Random Number</button>
        </div>

    </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from "vuex"
    export default {
        data() {
            return {
                value:1
            }
        },
        computed:{
            ...mapState(['counter'])
        },

        methods:{
            ...mapMutations(['addCounter','subtractCounter']),
            ...mapActions(['addRandomNumber'])
        },
        
    }
</script>

<style scoped>
    .counter {
        font-size: 4rem;
    }
    button {
        border-radius: 100%;
        border: none;
        width: 3rem;
        height: 3rem;
        font-weight: 600;
        cursor: pointer;
    }
    input {
        padding: 0.6rem;
        margin: 0 2rem;
        text-align: center;
    }

    .btn {
        border-radius: 0.5rem;
        width: auto;
        background: #4c00ff;
        margin-top: 1rem;
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
</style>