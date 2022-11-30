// import axios from "axios";
import Vuex from "vuex";
import request from "./request";

const baseUrl = "http://localhost:3000/api/";

let store = new Vuex.Store({
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

        // SET_PRODUCTS_TO_STATE: (state, products) => {
        //      state.products = products;
        // }
    },
    actions: {
        async getProductList({ commit }) {
            const url = `${baseUrl}products`;
            const products = await request(url);
            commit("setProductList", products);
        }
        // GET_PRODUCTS_FROM_API({commit}) {
        //     return axios(`http://developers.ria.com/states?api_key=5aLKRUWZHQB8UVcXDqolJt3k1YqLAJmsowWf9X7s`, {
        //         method: "GET",
        //     })
        //     .then((products) => {
        //         commit("SET_PRODUCTS_TO_STATE", products)
        //         return products; 
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         return error;
        //     })
        // }
    },
});

export default store;
