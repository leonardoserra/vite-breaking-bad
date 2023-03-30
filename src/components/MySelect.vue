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

        <select @change="$emit('getArchetype')" id=" archetype" name="archetype" class="btn" v-model="store.selected">
            <option value="">-Filtra per archetipo-</option>
            <option value="Abyss Actor">Abyss Actor</option>
            <option value="Adamancipator">Adamancipator</option>
            <option value="Ancient Gear">Ancient Gear</option>
            <option value="Albaz Dragon">Albaz Dragon</option>
            <option value="Apoqliphort">Apoqliphort</option>
            <option value="Vaylantz">Vaylantz</option>
            <option value="Fleur">Fleur</option>
        <option value="Battlewasp">Battlewasp</option>
        <option value="Blackwing">Blackwing</option>
            <option value="Toon">Toon</option>
            <option value="Dinomorphia">Dinomorphia</option>
            <option value="Archfiend">Archfiend</option>
            <option value="Despia">Despia</option>
            <option value="Elemental HERO">Elemental HERO</option>
            <option value="Gouki">Gouki</option>
            <option value="Horus the Black Flame Dragon">Horus the Black Flame Dragon</option>
            <option value="Kozmo">Kozmo</option>
            <option value="Manadome">Manadome</option>
            <option value="Odd-Eyes">Odd-Eyes</option>
            <option value="Prank-Kids">Prank-Kids</option>
            <option value="Stardust">Stardust</option>
            <option value="Train">Train</option>

            <!-- <option v-for="(card, index) in store.cards.data" :key="index" :value="card.archetype">
                    {{ card.archetype }}
                </option> -->
        </select>
    </div>
</template>



<style scoped lang="scss">
@use "../style/partials/_colors.scss" as*;

.wrapper {


    background-color: $primary-color;
}
</style>