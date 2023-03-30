<script>
import { store } from "../store.js"
export default {
    name: 'MySelect',
    data() {
        return {
            store
        }
    }
    // mounted() {
    //     this.archetypesArray = this.store.map(card => card.data.archetype);
    //     console.log(this.archetypesArray);
    // }
}
</script>


<template>
    <div class="wrapper py-2">

        <select id="archetype" name="archetype" class="btn">
            <option value="Ancient Gear">Ancient Gear</option>
            <option value="Ancient Warriors">Ancient Warriors</option>
            <option value="Archfiend">Archfiend</option>
            <!-- <option v-for="(card, index) in store.cards.data" :key="index" :value="card.archetype"> -->
            <!-- <div v-if="card.race != card[index - 1].race"> -->
            <!-- {{ card.race }} -->
            <!-- </div> -->
            <!-- </option> -->
        </select>
    </div>
</template>



<style scoped lang="scss">
@use "../style/partials/_colors.scss" as*;

.wrapper {


    background-color: $primary-color;
}
</style>