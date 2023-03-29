<script>
import MyHeader from './components/MyHeader.vue';
import MySelect from './components/MySelect.vue';
import DeckBook from './components/DeckBook.vue';

import axios from 'axios';
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    MyHeader,
    MySelect,
    DeckBook
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
  <main>
    <div class="container">
      <MySelect />
      <DeckBook />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
