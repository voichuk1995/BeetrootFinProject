import { createRouter, createWebHistory } from "vue-router";
import VoichukHome from "../views/VoichukHome.vue";
import VoichukFAQ from "../views/VoichukFAQ.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: VoichukHome,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
        import("../views/VoichukAbout.vue"),
        children: {
                path: "faq",
                name: "FAQ",
                component: VoichukFAQ,
    
            },
    },
    {
        path: "/property",
        name: "Property",
        component: () =>
        import("../views/VoichukProperty.vue"),
    },
    {
        path: "/blog",
        name: "Blog",
        component: () =>
        import("../views/VoichukBlog.vue"),
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: () =>
        import("../views/VoichukContacts.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
