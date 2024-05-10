<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};

</script>

<template>
  <body id="achtergrond">
    <HeaderComponent/>

    <router-view/>

    <FooterComponent/>
  </body>
</template>

