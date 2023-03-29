<script>
export default {
    name: 'MyHeader',
    data() {
        return {

        }
    }
}
</script>


<template>
    <div class="wrapper d-flex">
        <img src="/logo.png" alt="logo">
        <h1>Yu-Gi-Oh API</h1>
    </div>
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