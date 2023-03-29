<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store.js";
export default {
    name: 'DeckBook',
    data() {
        return {
            store
        }
    },
    components: {
        SingleCard
    }
}
</script>


<template>
    <div class="wrapper py-3">
        <div class="container">
            <div class="row">
                <div class="my-card" v-for="(card, index) in store.cards" :key="index" :name="card.name" :race="card.race"
                    :image="card.card_images.image_url">
                    <SingleCard />
                </div>
            </div>
        </div>

    </div>
</template>



<style scoped lang="scss">
@use "../style/partials/_colors.scss" as*;

.wrapper {
    background-color: $secondary-color;
    border: 1px solid $tertiary-color;
    min-height: calc(100vh - 100px);
}
</style>