<script>
import { useGebruikers } from '@/stores/winkelmandje';

export default {
  data() {
    return {
      titelSignUp: 'Hallo daar',
      buttonSignUp: 'Sign up',
      naam: 'Naam',
      email: 'Email adres',
      wachtwoord: 'Wachtwoord',
      straat: 'Straat',
      straatNummer: 'Straatnummer',
      stad: 'Stad',
      postcode: 'Postcode',
      newUser: {
        name: '',
        username: '',
        password: '',
        street: '',
        streetNumber: '',
        city: '',
        postcode: '',
      },
    };
  },
  methods: {
    signUp() {
      const newUser = {
        id: this.gebruikersStore.users.length + 1,
        name: this.newUser.name,
        username: this.newUser.username,
        password: this.newUser.password,
        street: this.newUser.street,
        streetNumber: this.newUser.streetNumber,
        city: this.newUser.city,
        postcode: this.newUser.postcode,
      };

      this.gebruikersStore.addUser(newUser);
      console.log('Gebruiker aangemaakt:', newUser);

      this.newUser = {
        name: '',
        username: '',
        password: '',
        street: '',
        streetNumber: '',
        city: '',
        postcode: '',
      };
    },
  },

  computed: {
    gebruikersStore() {
      return useGebruikers();
    },
  },
};
</script>


<template>
  <div class="signup__form">
    <h1>{{ titelSignUp }}</h1>
    <div class="signup__form__formulier">
      <form @submit.prevent="signup">
        <label for="name">{{ naam }}</label>
        <input v-model="newUser.name" type="text" id="name" name="name" required minlength="2" maxlength="100" placeholder="Voornaam Achternaam"><br><br>

        <label for="username">{{ email }}</label>
        <input v-model="newUser.username" type="email" id="username" name="username" required minlength="2" maxlength="100" placeholder="Voorbeeld.info@gmail.com"><br><br>

        <label for="password">{{ wachtwoord }}</label>
        <input v-model="newUser.password" type="password" id="password" name="password" required placeholder="Wachtwoord"><br><br>

        <label for="street">{{ straat }} + {{ straatNummer }}</label>
        <div>
          <input v-model="newUser.street" type="text" id="street" name="street" required placeholder="Straatnaam">
          <input v-model="newUser.streetNumber" type="text" id="streetNumber" name="streetNumber" required placeholder="Straatnummer">
        </div>

        <label for="city">{{ stad }}</label>
        <input v-model="newUser.city" type="text" id="city" name="city" required placeholder="Stad"><br><br>

        <label for="postcode">{{ postcode }}</label>
        <input v-model="newUser.postcode" type="text" id="postcode" name="postcode" required placeholder="Postcode"><br><br>

        <button @click="signUp" type="submit">{{ buttonSignUp }}</button>
      </form>
    </div>
  </div>
</template>