<script>
import { store } from "../store.js";
export default {
    name: "CounterCard",
    data() {
        return {
            store,
        }
    },
    computed: {
        cardNumber() {
            return this.store.cards.length;
        }
    }
}
</script>

<template>
    <div class="my-container">
        <h3>Numero di carte trovate: {{ this.cardNumber }}</h3>
        <!-- <h3 v-else>Non sono presenti carte con questo archetipo</h3> -->
    </div>
</template>

<style>
.my-contaier {
    height: 20px;
}
</style>