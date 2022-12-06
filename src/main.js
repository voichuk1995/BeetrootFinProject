import Vue from "vue";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Paginate from "../node_modules/vuejs-paginate/src/components/Paginate.vue";
import "./assets/layouts/index.scss";
import VueGoogleMaps from "@fawmi/vue-google-maps";




createApp(App)
    .use(router)
    .use(store)
    .use(VueGoogleMaps, {
        load: {
            key: "",
        },
    })
    .mount("#app");

Vue.component("Paginate", Paginate);
