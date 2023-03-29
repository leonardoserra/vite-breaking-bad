<script>
export default {
    name: 'MySelect',
    data() {
        return {

        }
    }
}
</script>


<template>
    <select id="race" name="race">
        <option value="Dragon">Dragon</option>
        <option value="Alien">Alien</option>

    </select>
</template>



<style scoped lang="scss">
@use "../style/partials/_colors.scss" as*;

.wrapper {
    height: 50px;

    h1 {
        color: $tertiary-color;
    }

    img {
        width: 100px;
    }
}
</style>