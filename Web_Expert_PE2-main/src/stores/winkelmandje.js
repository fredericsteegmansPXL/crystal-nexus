import { defineStore } from 'pinia';

export const useWinkelmandje = defineStore('winkelmandje', {
    state: () => ({
        cart: [], // Your cart state
    }),
    actions: {
        addToCart(item) {
            this.cart.push(item);
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
    },
});



export const useGebruikers = defineStore('gebruikers', {
    state: () => ({
        users: [
            { id: 1, username: 'ianthedemarie@gmail.com', password: '123', name: 'Ianthe de marie', street: 'Slagerstraat', streetNumber: '45', city: 'Hasselt', postcode: '3500' },
            { id: 2, username: 'leenhertogsh@yahoo.com', password: '456', name: 'Leen Hertogs', street: 'Witte torenwallstraat', streetNumber: '78', city: 'Bree', postcode: '3500' },
            { id: 3, username: 'robbebrebels@hotmail.com', password: '789', name: 'Robbe Brebels', street: 'Wakkerstraat', streetNumber: '910', city: 'Hasselt', postcode: '3960' },
        ],
        loggedInUser: null,
    }),
    actions: {
        addUser(newUser) {
            this.users.push(newUser);
            console.log('Nieuwe gebruiker toegevoegd:', newUser);
        },
        login(username, password) {
            const user = this.users.find(u => u.username === username && u.password === password);
            if (user) {
                this.loggedInUser = user;
                console.log(`Aangemeld als ${user.username}`);
                return true;
            } else {
                console.log('Onjuiste gebruikersnaam of wachtwoord');
                return false;
            }
        },
        logout() {
            console.log(`Afgemeld: ${this.loggedInUser ? this.loggedInUser.username : 'Geen gebruiker aangemeld'}`);
            this.loggedInUser = null;
        },
    },
});
