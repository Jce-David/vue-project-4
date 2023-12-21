<script lang="ts">
import { useUniqueStore } from '@/stores/unique';
import type { CartDetail } from '@/model/types';
import type { PropType } from 'vue';
import { useCartStore } from '@/stores/cart'

export default {

    props: {
        detail : {
            type : Object as PropType<CartDetail>,
            required: true
        }
    },
    computed:{
        detailsProduct(){
            const cartStore = useUniqueStore();
            return cartStore.detailsProduct
        },
    },
    methods:{
        onAddButtonClick(){
      const cartStore = useCartStore();
      return cartStore.addProductCart(this.detail.product)
    }
    }
   

}

</script>

<template>
        <v-card>
    <v-card-text>
      {{ detail.product.name }}
    </v-card-text>
    <v-chip>
      {{ detail.product.price }}
    </v-chip>
    <v-card-actions>
      <v-btn block @click="onAddButtonClick" > AGREGAR AL CARRITO</v-btn>
  
    </v-card-actions>
    <RouterLink to="/cart">

   
      <v-btn block @click="onAddButtonClick" > PAGAR </v-btn>
    </RouterLink>

  </v-card>
</template>