<script>
export default {
  data() {
    return {
      bekijkMeer: 'Bekijk meer'
    };
  },
  props: {
    products: Array,
  },
  methods: {
    viewProductDetail(productId) {
      this.$router.push({ name: 'productDetail', params: { id: productId } });
    }
  }
};
</script>

<template>
  <div class="card__layout">
    <div v-for="item in products" :key="item.id" class="card">
      <img :src="item.afbeelding" :alt="item.titel" class="card__image">
      <div class="card__content">
        <h2 class="card__title">{{ item.titel }}</h2>
        <p class="card__description">{{ item.omschrijving }}</p>
      </div>
      <div class="card__details">
        <p class="card__price">{{ '€' + item.prijs.toFixed(2) }}</p>
        <button @click="viewProductDetail(item.id)" class="card__button">{{ bekijkMeer }}</button>
      </div>
    </div>
  </div>
</template>
