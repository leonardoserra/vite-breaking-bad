<script>
import { store } from "../store.js";
export default {
    name: "CounterCard",
    data() {
        return {
            store,
        }
    },
    props: {
        cardNumber: Number
    }

}
</script>

<template>
    <div class="my-container">
        <h3 class="px-3 py-1">Carte con questo archetipo: {{ cardNumber }}</h3>
        <!-- <h3 v-else>Non sono presenti carte con questo archetipo</h3> -->
    </div>
</template>

<style>
.my-contaier {
    height: 20px;

}
</style>