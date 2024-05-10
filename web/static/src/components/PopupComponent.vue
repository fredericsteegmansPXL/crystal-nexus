<script>
export default {
  data() {
    return {
      naarWinkelmandje: 'Naar winkelmandje',
      naarProducten: 'Terug naar producten'
    };
  },
  props: {
    message: String,
    showGoToCart: Boolean,
    showGoToProducts: Boolean,
    onGoToCart: Function,
    onGoToProducts: Function,
  },
  methods: {
    goToCart() {
      this.$router.push({ name: 'winkelmandje' });
    },
    goToProducts() {
      this.$router.push({ path: '/products' });
    }
  }
};
</script>


<template>
  <div class="popup">
    <div class="popup__content">
      <p>{{ message }}</p>
      <button @click="goToCart" v-if="showGoToCart">{{ naarWinkelmandje }}</button>
      <button @click="goToProducts" v-if="showGoToProducts">{{ naarProducten }}</button>
    </div>
  </div>
</template>


