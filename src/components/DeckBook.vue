<script>
import { store } from "../store.js";
import SingleCard from "./SingleCard.vue";

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
        <div class="my-container">
            <div class="my-card" v-for="(card, index) in this.store.cards.data" :key="index">
                <SingleCard :name="card.name" :race="card.race" :image="card.card_images[0].image_url" />
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
    width: 100%;

    .my-container {
        display: flex;
        flex-wrap: wrap;

        .my-card {
            width: calc(100% / 5);
            height: 200px;
        }
    }
}
</style>