import { createRouter, createWebHistory } from "vue-router";
// import { useRouter } from "vue-router";
import home from "@/pages/home.vue";
import movies from "@/pages/movies.vue";
import tv from "@/pages/tv.vue";
import contact from "@/pages/contact.vue";
import sign from "@/pages/sign.vue";

// const userRouters = useRouter();
const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: home, name: 'Home',
            meta: {
                title: "Home - Movfix - Online Movies & TV Shows",
            }
        },
        {
            path: "/movie", component: movies, name: "Movies",
            meta: {
                title: "Movies - Movfix - Online Movies & TV Shows"
            }
        },
        {
            path: "/tv-show", component: tv, name: "TV Shows",
            meta: {
                title: "TV Shows - Movfix - Online Movies & TV Shows"
            }
        },
        {
            path: "/contact", component: contact, name: "Contact",
            meta: {
                title: "Contact - Movfix - Online Movies & TV Shows"
            }
        },
        {
            path: "/signin", component: sign, name: "Sign",
            meta: {
                title: "Sign - Movfix - Online Movies & TV Shows",
            }
        }
    ]
})

routers.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    return next();
});

export default routers;