<script>
import { store } from "../store.js";
export default {
    name: "CounterCard",
    data() {
        return {
            store
        }
    },
    computed: {
        cardNumber() {
            // return this.store.cards.data.length;
        }
    }
}
</script>

<template>
    <div class="my-container">
        <h3>Numero di carte trovate: da fixare</h3>
        <h3>Non sono presenti carte con questo archetipo</h3>
        <!-- <h3 v-if="this.store.cards.data.length">Numero di carte trovate: da fixare</h3>
            <h3 v-else>Non sono presenti carte con questo archetipo</h3> -->
    </div>
</template>

<style>
.my-contaier {
    height: 20px;
}
</style>