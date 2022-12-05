// import axios from "axios";
// import Vuex from "vuex";
import { createStore } from "vuex";
import request from "./request";

const baseUrl = "http://localhost:3000/api/";

export default createStore({
    state: {
        productList: [],
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    },
    mutations: {
        setProductList(state, products){
            state.productList = products;
        }
    },
    actions: {
        async getProductList({ commit }) {
            const url = `${baseUrl}products`;
            const products = await request(url);
            commit("setProductList", products);
        }
    },
});
