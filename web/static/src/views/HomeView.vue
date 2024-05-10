<script>
import producten from '../../producten.json';
import PopularProductsComponent from "@/components/PopularProductsComponent.vue";

export default {
  components: {
    PopularProductsComponent
  },
  data() {
    return {
      producten: [],
      carouselProducten: [],
      currentIndex: 0,
      Hoofdtitel: 'Ontdek onze collectie over verschillende soorten kristallen',
      Hoofdtekst: 'Verken onze diverse kristalcollectie en ontdek de unieke schoonheid en energie van verschillende soorten kristallen. Van de betoverende amethist tot het heldere bergkristal, laat je inspireren door de pracht van deze bijzondere stenen.',
      HoofdButton: 'Shop nu!',
      afbeelding1Pad: 'src/assets/images/all_kinds_of_stones.png',
      afbeelding2Pad: 'src/assets/images/persoon_contact.png',
      afbeelding1Alt: 'Mock-up stones rol',
      afbeelding2Alt: 'Persoon',
      titel2: 'Waarom voor ons kiezen?',
      cardTitel1: 'Waarom voor ons kiezen?',
      cartTekst1: 'Ontdek de ware pracht van onze kristallen. Elk stuk is met zorg geselecteerd en straalt zijn unieke energie uit. Laat je betoveren door de schoonheid van echte kristallen die een vleugje magie aan je leven toevoegen.',
      cardTitel2: 'Duurzaam en milieu vriendelijk gemijnd',
      cartTekst2: 'Wij streven naar duurzaamheid en respect voor onze planeet. Onze kristallen worden met zorg en milieuvriendelijke methoden gewonnen. Kies voor schoonheid met een goed geweten en ontdek de unieke stukken die de natuur ons te bieden heeft.',
      cardTitel3: 'De meest unieke kristallen vormen',
      cartTekst3: 'Laat je verwonderen door de meest unieke kristalvormen in onze collectie. Elk stuk is een kunstwerk van de natuur, met eigenzinnige vormen en structuren. Ontdek de diversiteit van kristallen en geef een bijzonder accent aan je leefruimte.',
      contactTitel: 'Contact ons nu!',
      contactTekst: 'Bereik ons direct voor al je vragen en behoeften! Of je nu op zoek bent naar advies, een bestelling wilt plaatsen, of gewoon wilt praten over de pracht van kristallen, wij zijn hier voor jou. Laat de magie beginnen - neem vandaag nog contact met ons op en ontdek de unieke wereld van kristallen!',
      contactButton: 'Contacteer ons nu',
    };
  },
  mounted() {
    this.producten = producten.artikelen;
    this.sortAndSetCarouselProducts();
  },
  methods: {
    sortAndSetCarouselProducts() {
      this.producten.sort((a, b) => b.voorraad - a.voorraad);
      this.carouselProducten = this.producten.slice(0, 5);
    },
    nextProduct() {
      if (this.currentIndex < this.carouselProducten.length - 1) {
        this.currentIndex++;
      }
    },
    prevProduct() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    goToProducts() {
      this.$router.push({ path: '/products' });
    },
    showProductDetails(product) {
      this.$router.push({ name: "productDetail", params: { id: product.id } });
    },
  }
};
</script>

<template>
  <div class="index__main">
    <div class="index__header">
      <div class="index__header__links">
        <h1> {{ Hoofdtitel }}</h1>
        <p>{{ Hoofdtekst }}</p>
       <button @click="goToProducts" type="button">{{  HoofdButton }}</button>
      </div>
      <div class="index__header__rechts">
        <img :src="afbeelding1Pad" :alt="afbeelding1Alt">
      </div>
    </div>


    <!--in de kijker -->
    <PopularProductsComponent
        :carouselProducten="carouselProducten"
        :currentIndex="currentIndex"
        @prevProduct="prevProduct"
        @nextProduct="nextProduct"
        @showProductDetails="showProductDetails"/>

    <!--    rotating cards-->
    <div class="index__card">
      <h1>{{  titel2 }}</h1>
      <div class="index__card__rotate">
        <div class="index__card__rotate__special" id="card__1">
          <h2>{{  cardTitel1 }}</h2>
          <p>{{ cartTekst1 }}</p>
        </div>
        <div class="index__card__rotate__special" id="card__2">
          <h2>{{  cardTitel2 }}</h2>
          <p>{{ cartTekst2 }}</p>
        </div>
        <div class="index__card__rotate__special" id="card__3">
          <h2>{{ cardTitel3 }}</h2>
          <p>{{ cartTekst3 }}</p>
        </div>
      </div>
    </div>

    <!--contact us -->
    <div class="index__contact">
      <div class="index__contact__links">
        <img :src="afbeelding2Pad" :alt="afbeelding2Alt">
      </div>
      <div class="index__contact__rechts">
        <h1>{{ contactTitel }}</h1>
        <p>{{ contactTekst }}</p>
        <button type="button">{{ contactButton }}</button>
      </div>
    </div>
  </div>
</template>
