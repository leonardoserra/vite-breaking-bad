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
            let number = this.store.cards.data.length;
            if (number) {
                return `Numero di carte trovate: ${number}`;
            } else {
                return "Non sono presenti carte con questo archetipo";
            }
        }
    }
}
</script>

<template>
    <div class="my-container">
        <h3>{{ cardNumber }}</h3>
        <!-- <h3 v-else>Non sono presenti carte con questo archetipo</h3> -->
    </div>
</template>

<style>
.my-contaier {
    height: 20px;
}
</style>