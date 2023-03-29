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
    <div class="single-card">
        <div>
            <img :src="image" :alt="name">
        </div>

        <div>
            <h3>{{ name }}</h3>
        </div>

        <div>
            <h4>{{ race }}</h4>
        </div>
    </div>
</template>

<style scoped lang="scss">
.single-card {



    img {
        height: 100px;
    }

    h3,
    h4 {
        color: black;
    }
}
</style>