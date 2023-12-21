import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    detailsCart: [] as CartDetail []
  }),
  getters: {
    
  },
  actions: {
    addProductCart(product: Product){
      const detailFound = this.detailsCart.find( d=> d.product.id === product.id);
      if(detailFound){
        detailFound.quantity += 1
      } else {
        this.detailsCart.push({
          product,
          quantity:1
        })
      }
    }
  }
})