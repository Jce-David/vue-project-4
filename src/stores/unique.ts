import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types'

export const useUniqueStore = defineStore('unique', {
  state: () => ({
    detailsProduct: [] as CartDetail []
  }),
  getters: {
    
  },
  actions: {
    addProduct(product: Product){
        const alreadyInCart = this.detailsProduct.some((d) => d.product.id === product.id);

        if (!alreadyInCart) {
          // Si el producto no está en el carrito, agrégalo
          this.detailsProduct = [{
            product,
            quantity: 1,
          }];
        }
    }
  }
})