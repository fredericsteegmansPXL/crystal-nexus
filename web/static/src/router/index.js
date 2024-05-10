// index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import WinkelmandjeView from '@/views/WinkelmandjeView.vue';
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import BevestigingsPaginaView from '@/views/BevestigingsPaginaView.vue'
import SignUpView from '@/views/SignUpView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/products',
            name: 'producten',
            component: ProductView
        },
        {
            path: '/products/detail/:id',
            name: 'productDetail',
            component: ProductDetailView
        },
        {
            path: '/login',
            component: LoginView
        },
        {
          path: '/Signup',
          component: SignUpView
        },
        {
            path: '/winkelmandje',
            name: 'winkelmandje',
            component: WinkelmandjeView,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: CheckoutView,
        },
        {
            path: '/bevestiging',
            name: 'bevestiging',
            component: BevestigingsPaginaView,
        },
        {
            path: '/:notFound(.*)',
            component: PageNotFoundView
        }
    ]
});

export default router
