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
    <div class="wrapper py-2">

        <select id="race" name="race" class="btn">
            <option value="Dragon">Dragon</option>
            <option value="Alien">Alien</option>
        </select>
    </div>
</template>



<style scoped lang="scss">
@use "../style/partials/_colors.scss" as*;

.wrapper {


    background-color: $primary-color;
}
</style>