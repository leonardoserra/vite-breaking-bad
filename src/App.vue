<script>
import MyHeader from './components/MyHeader.vue';
import MySelect from './components/MySelect.vue';
import DeckBook from './components/DeckBook.vue';
import LoaderBonus from './components/LoaderBonus.vue';
import CounterCard from './components/CounterCard.vue';

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
    DeckBook,
    LoaderBonus,
    CounterCard
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?atk=3000')
        .then(response => {
          this.store.cards = response.data;
          this.store.loading = false;
          console.log(response.data);
          console.log(this.store.cards.data[0].card_images[0].image_url);

        })
    }
  },
  computed: {

  },
  created() {
    this.getCards();

  }
}
</script>

<template>
  <LoaderBonus />
  <MyHeader />
  <main>
    <CounterCard />
    <div class="my-container">
      <MySelect />
      <DeckBook />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
