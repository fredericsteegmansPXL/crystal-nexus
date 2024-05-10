<script>
export default {
  data() {
    return {
      lvLogoExtendedFooter: '/src/assets/images/logo_deel_2.png',
      lvLogoExtendedAltFooter: "Logo afbeelding extended",
      productNaamFooter: "Product",
      productArtikelFooter: "All kinds of crystals",
      contactNaamFooter: "Contact",
      contactTekstFooter: "Heb je een vraag voor ons?",
      contactButtonTekstFooter: "Neem contact met ons op!",
      copyRightFooter: "2023 Lv Visionary Visuals",
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="footer__section footer__section__links">
      <img :src="lvLogoExtendedFooter" :alt="lvLogoExtendedAltFooter">
    </div>
    <div class="footer__section footer__section__products">
      <h2 class="footer__titel">{{ productNaamFooter }}</h2>
      <router-link :to="{name:'producten'}"><p class="footer__tekst">{{  productArtikelFooter }}</p></router-link>
    </div>
    <div class="footer__section footer__section__contact">
      <h2 class="footer__titel">{{ contactNaamFooter }}</h2>
      <p class="footer__tekst">{{ contactTekstFooter }}</p>
      <button>{{ contactButtonTekstFooter }}</button>
    </div>
  </div>
  <div class="footer__copy-right">&copy {{ copyRightFooter }}</div>
</template>
