<script>
export default {
    name: "SingleCard",
    data() {
        return {

        }
    },
    props: {
        image: String,
        name: String,
        race: String
    }
}
</script>

<template>
    <div class="single-card">
        <img :src="image" :alt="name">
        <h3>{{ name }}</h3>
        <h4>{{ race }}</h4>
    </div>
</template>

<style scoped lang="scss">
.single-card {
    height: 50px;

    img {
        display: inline-block;
    }
}
</style>