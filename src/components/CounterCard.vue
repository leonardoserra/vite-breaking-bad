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
            return store.cards.data.length;
        }
    }
}
</script>

<template>
    <div class="my-container">
        <h3>Numero di carte trovate: {{ cardNumber }}</h3>
    </div>
</template>

<style>
.my-contaier {
    height: 20px;
}
</style>