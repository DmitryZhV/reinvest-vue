import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: "http://127.0.0.1:8000/api/v1",
    products: [],
    categories: [],
    category: 0,
    bestchoice: [],
    cart: [],

  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CATEGORIES_TO_STATE: (state, categories) => {
      state.categories = categories;
    },
    SET_BESTCHOICE_TO_STATE: (state, bestchoice) => {
      state.bestchoice = bestchoice;
    },
    SET_CATEGORY_TO_STATE: (state, id) => {
      state.category = id;
    }

  },
  actions: {
    GET_PRODUCTS({commit}) {
      return axios.get('http://127.0.0.1:8000/api/v1/catalog/product').then(({ data }) => {
        commit('SET_PRODUCTS_TO_STATE', data.results);
      }).catch((error) => {
        console.log(error);
        
      })
    },
    GET_CATEGORIES({commit}) {
      return axios.get('http://127.0.0.1:8000/api/v1/catalog/category').then(({ data }) => {
        commit('SET_CATEGORIES_TO_STATE', data.results);
      }).catch((error) => {
        console.log(error);
        
      })
    },
    GET_BESTCHOICE({commit}) {
      return axios.get('http://127.0.0.1:8000/api/v1/catalog/prodbuers/').then(({ data }) => {
        commit('SET_BESTCHOICE_TO_STATE', data.results);
      }).catch((error) => {
        console.log(error);
        
      })
    },
  },
  modules: {
  },
  getters: {
      PRODUCTS(state) {
        return state.products;
      },
      CATEGORIES(state) {
        return state.categories;
      },
      CATEGORY(state) {
        return state.category;
      },
      GETSERVERURL(state) {
          return state.backendUrl;
      },
      CART(state) {
        return state.cart;
      },
      BESTCHOICE(state) {
        return state.bestchoice;
      },

  },
})
