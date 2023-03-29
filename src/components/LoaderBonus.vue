<script>
import { store } from "../store.js";
export default {
    name: "LoaderBonus",
    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <div class="loading" v-if="store.loading">
        <h1> Caricamento pagina...Attendere</h1>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/colors" as*;

.loading {
    width: 100vw;
    height: 100vh;
    background-color: $secondary-color;

    h1 {
        color: black;
    }
}
</style>