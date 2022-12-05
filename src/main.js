import Vue from "vue";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Paginate from "../node_modules/vuejs-paginate/src/components/Paginate.vue";
import "./assets/layouts/index.scss";



createApp(App).use(router).use(store).mount("#app");

Vue.component("Paginate", Paginate);
