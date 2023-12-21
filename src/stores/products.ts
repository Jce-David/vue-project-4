import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types'

export const useProductsStore = defineStore('products', {
  state: () => ({
    categoryId: null as number | null ,
    _products: [ 
        {name: "Computer" , price: 1500 , id: 1 , categoryId:1},
        {name: "Pelota" , price: 1600 , id: 2 , categoryId:2},
        {name: "Polo" , price: 1700 , id: 3 , categoryId:3}
    ] as Product []
  }),
  getters: {
    products(state) {
        if(!state.categoryId){
            return state._products
        }
        return state._products.filter(d=> d.categoryId === state.categoryId);
    }
  },
  actions: {
    selectCategory(categoryId: number){
        this.categoryId = categoryId;
    }
  }
})