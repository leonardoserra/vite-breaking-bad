<script>
export default {
    name: "SingleCard",
    props: {
        name: String,
        race: String,
        image: String
    }
}
</script>

<template>
    <div class="single-card" p-1>
        <img :src="image" :alt="name">
        <h3>{{ name }}</h3>
        <h4>{{ race }}</h4>
    </div>
</template>

<style scoped lang="scss">
.single-card {

    img {
        display: inline-block;
        height: 100px;
    }

    h3,
    h4 {
        color: black;
    }
}
</style>