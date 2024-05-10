<script>
import producten from '../../producten.json';
import PopupComponent from "@/components/PopupComponent.vue";
import { useGebruikers } from '@/stores/winkelmandje'

export default {
  data() {
    return {
      product: {},
      quantity: 1,
      showPopup: false,
      popupMessage: '',
      reviews: '(12 reviews)',
      buttonAddToCard: 'Add to cart',
      buttonLogIn: 'Log in',
      selectedSubtitel: 'About',
      Subtitel2: 'Specs',
      Subtitel3: 'Reviews',
      gebruikersStore: useGebruikers(),
    };
  },
  components: {
    PopupComponent,
  },
  methods: {
    addToCart() {
      if (this.gebruikersStore.loggedInUser) {
        const addedProduct = {
          id: this.product.id,
          quantity: parseInt(this.quantity, 10),
          price: this.product.prijs,
          name: this.product.titel,
          afbeelding: this.product.afbeelding,
          omschrijving: this.product.omschrijving,
          stock: this.product.hoeveelheid_voorraad,
          btw: this.product.btw_tarief,
        };

        this.$root.winkelmandje.push(addedProduct);
        this.showPopup = true;
        this.popupMessage = `Product "${this.product.titel}" is toegevoegd aan je winkelmandje.`;
      } else {
        this.$router.push('/login');
      }
    },

    closePopup() {
      this.showPopup = false;
      this.popupMessage = '';
    },
    goToCart() {
      this.closePopup();
    },
    goToProducts() {
      this.closePopup();
    },
    selectSubtitel(subtitel) {
      this.selectedSubtitel = subtitel;
    },
  },
  computed: {
    buttonText() {
      return this.product.hoeveelheid_voorraad > 0 ?
          (this.gebruikersStore.loggedInUser ? this.buttonAddToCard : this.buttonLogIn) : '';
    },
  },


  mounted() {
    const productId = parseInt(this.$route.params.id);
    this.product = producten.artikelen.find(product => product.id === productId);
  },
};
</script>


<template>
  <div v-if="product" class="detail">
    <div class="detail__layout">
      <div class="detail__layout__foto">
        <img :src="product.afbeelding" :alt="product.titel">
      </div>
      <div class="detail__layout__tekst">
        <div class="detail__layout__tekst__stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>{{ reviews }}</p>
        </div>
        <div class="detail__layout__tekst__info">
          <h1>{{ product.titel }}</h1>
          <p>{{ product.omschrijving }}</p>
          <p class="aanwezigheid">{{ product.hoeveelheid_voorraad > 0 ? `Aanwezig` : `Niet meer beschikbaar` }}</p>
          <h2>{{ '€' + (product.prijs ? product.prijs.toFixed(2) : 'Niet aanwezig') }}</h2>
        </div>

        <div class="detail__layout__tekst__buttons">
          <button type="button"><i class="fa-regular fa-heart"></i></button>
          <select v-if="product.hoeveelheid_voorraad > 0" v-model="quantity" name="quantity" class="quantityDropdown">
            <option v-for="n in Math.min(product.hoeveelheid_voorraad, 5)" :value="n" :key="n">{{ n }}</option>
          </select>
          <button v-if="product.hoeveelheid_voorraad > 0" type="button" @click="addToCart">{{ buttonText }}</button>
        </div>

        <div class="detail__layout__tekst__options">
          <p @click="selectSubtitel('About')" :class="{ 'active': selectedSubtitel === 'About' }">About</p>
          <p @click="selectSubtitel('Specs')" :class="{ 'active': selectedSubtitel === 'Specs' }">Specs</p>
          <p @click="selectSubtitel('Reviews')" :class="{ 'active': selectedSubtitel === 'Reviews' }">Reviews</p>
        </div>
        <div class="detail__layout__tekst__About" v-if="selectedSubtitel === 'About'">
          <p>{{ product.omschrijving }}</p>
        </div>
        <div class="detail__layout__tekst__Specs" v-if="selectedSubtitel === 'Specs'">
          <p><strong>Kleur:</strong> {{ product.specs.kleur }}</p>
          <p><strong>Gewicht:</strong> {{ product.specs.gewicht }}</p>
          <p><strong>Afmetingen:</strong> {{ product.specs.afmetingen }}</p>
        </div>
        <div class="detail__layout__tekst__Reviews" v-if="selectedSubtitel === 'Reviews'">
          <div class="detail__layout__tekst__Reviews__sectie" v-for="review in product.reviews" :key="review.gebruikersnaam">
            <h3><strong>{{ review.gebruikersnaam }}:</strong></h3>
            <p><strong>Beoordeling:</strong> {{ review.beoordeling }}/5</p>
            <p><strong>Opmerking:</strong> {{ review.opmerking }}</p>
          </div>
        </div>
      </div>
    </div>

    <PopupComponent
        v-if="showPopup"
        :message="popupMessage"
        :showGoToCart="product.hoeveelheid_voorraad > 0"
        :showGoToProducts="true"
        @onClose="closePopup"
        @goToCart="goToCart"
        @goToProducts="goToProducts"
    />
  </div>
</template>

<style>
.detail__layout__tekst__options p.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
