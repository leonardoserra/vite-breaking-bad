<script>
import MyHeader from './components/MyHeader.vue';
import axios from 'axios';
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    MyHeader
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?level=12')
        .then(response => {
          this.store.cards = response.data;
          console.log(response.data);
        })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template>
  <MyHeader />
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
