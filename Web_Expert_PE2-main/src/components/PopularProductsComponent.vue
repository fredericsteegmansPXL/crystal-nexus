<script>
import producten from '../../producten.json';

export default {
  data() {
    return {
      buttonVorigArtikel: 'Vorige',
      buttonVolgendArtikel: 'Volgend',
      populairProduct: 'Populaire producten',
      meerInfo: 'Meer info'
    };
  },
  props: {
    carouselProducten: Array,
    currentIndex: Number,
  },
  computed: {
    sortedProducts() {
      return producten.artikelen.slice().sort((a, b) => b.hoeveelheid_voorraad - a.hoeveelheid_voorraad);
    },
    currentProduct() {
      return this.sortedProducts[this.currentIndex];
    },
  },
  methods: {
    prevProduct() {
      this.$emit('prevProduct');
    },
    nextProduct() {
      this.$emit('nextProduct');
    },
    logButtonClick() {
      this.$emit('showProductDetails', this.currentProduct);
    }
  }
};
</script>

<template>
  <div class="index__kijker">
    <div class="index__kijker__links">
      <img v-if="currentProduct" :src="currentProduct.afbeelding" :alt="currentProduct.titel">
      <button @click="prevProduct" :disabled="currentIndex === 0">Vorige</button>
      <button @click="nextProduct" :disabled="currentIndex === carouselProducten.length - 1">Volgend</button>
    </div>
    <div class="index__kijker__links__2"></div>
    <div class="index__kijker__rechts">
      <p>Populaire producten</p>
      <h1 v-if="currentProduct && currentProduct.titel">
        {{ currentProduct.titel }}
      </h1>
      <p v-if="currentProduct && currentProduct.omschrijving">
        {{ currentProduct.omschrijving }}</p>
      <button @click="logButtonClick" type="button">meer info</button>
    </div>
  </div>
</template>
