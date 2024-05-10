<script>
import { useGebruikers } from '@/stores/winkelmandje'

export default {
  data() {
    return {
      title: 'Checkout',
      Subtitel: 'Gegevens',
      Subtitel2: 'Winkelmandje Items',
      aantal: 'Aantal: ',
      naamLabel: 'Naam:',
      straatLabel: 'Straat:',
      nummerLabel: 'Nummer:',
      stadLabel: 'Stad:',
      postcodeLabel: 'Postcode:',
      facturatieVerschillendLabel: 'Facturatiegegevens verschillend?',
      facturatieVerschillend: false,
      FacturatieStraatLabel: 'Facturatie Straat:',
      facturatieStraat: '',
      FacturatieNummerLabel: 'Facturatie BTW:',
      facturatieNummer: '',
      button: 'Bevestig Bestelling',
      totaalBtw: 'Totaal btw: € ',
      TotaalMetBtw: 'Totaal met btw: € '
    };
  },

  methods: {
    calculateTotalWithoutBtw() {
      return this.winkelmandje.reduce((total, product) => total + (product.price * product.quantity), 0);
    },
    calculateTotalWithBtw() {
      return this.winkelmandje.reduce((total, product) => {
        const totalPrice = product.price * product.quantity;
        const totalBtw = totalPrice * (product.btw / 100);
        return total + totalPrice + totalBtw;
      }, 0);
    },
  },

  computed: {
    winkelmandje() {
      return this.$root.winkelmandje;
    },

    loggedInUser() {
      return useGebruikers().loggedInUser || {};
    },

    naam: {
      get() {
        return this.loggedInUser.name || '';
      },
    },

    straat: {
      get() {
        return this.loggedInUser.street || '';
      },
    },

    nummer: {
      get() {
        return this.loggedInUser.streetNumber || '';
      },
    },

    stad: {
      get() {
        return this.loggedInUser.city || '';
      },
    },

    postcode: {
      get() {
        return this.loggedInUser.postcode || '';
      },
    },
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="checkout__view">
    <form class="checkout__view__links">
      <h2>{{ Subtitel }}</h2>
      <div class="input__group">
        <label for="naam">{{ naamLabel }}</label>
        <input type="text" id="naam" v-model="naam" required />
      </div>

      <div class="flex__input__group">
        <div class="input__group">
          <label for="straat">{{ straatLabel }}</label>
          <input type="text" id="straat" v-model="straat" />
        </div>
        <div class="input__group small">
          <label for="nummer">{{ nummerLabel }}</label>
          <input type="text" id="nummer" v-model="nummer" required />
        </div>
      </div>

      <div class="input__group">
        <label for="stad">{{ stadLabel }}</label>
        <input type="text" id="stad" v-model="stad" required />
      </div>

      <div class="input__group">
        <label for="postcode">{{ postcodeLabel }}</label>
        <input type="text" id="postcode" v-model="postcode" required />
      </div>

      <div class="input__group">
        <label for="facturatieCheckbox">{{ facturatieVerschillendLabel }}</label>
        <input type="checkbox" id="facturatieCheckbox" v-model="facturatieVerschillend" />
      </div>

      <div v-if="facturatieVerschillend" class="facturatie__form">
        <div class="flex__input__group">
          <div class="input__group">
            <label for="facturatieStraat">{{ FacturatieStraatLabel }}</label>
            <input type="text" id="facturatieStraat" v-model="facturatieStraat" required />
          </div>
          <div class="input__group small">
            <label for="facturatieNummer">{{ FacturatieNummerLabel }}</label>
            <input type="text" id="facturatieNummer" v-model="facturatieNummer" required />
          </div>
        </div>
      </div>
      <router-link to="/bevestiging">
        <button>{{ button }}</button>
      </router-link>
    </form>

    <!-- Producten -->
    <div class="winkelmandje__producten__rechts">
      <h2>{{ Subtitel2 }}</h2>
      <div v-for="(item, index) in winkelmandje" :key="index" class="winkelmandje__item">
        <img :src="item.afbeelding" :alt="item.naam">
        <div class="product__details">
          <p>{{ item.name }}</p>
          <p>{{ aantal }} {{ item.quantity }}</p>
        </div>
      </div>
      <div class="winkelmandje__producten__prijs">
        <p>{{ totaalBtw }} {{ calculateTotalWithoutBtw().toFixed(2) }}</p>
        <p>{{ TotaalMetBtw }} {{ calculateTotalWithBtw().toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>