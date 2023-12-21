<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from '../model/types'
import { useUniqueStore } from '@/stores/unique';
export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true 
    }
  },
  computed:{

  },
  methods : {
    onAddButtonClick(){
      const cartStore = useUniqueStore();
      return cartStore.addProduct(this.product)
    }

  }
}
</script>

<template>
  <v-card>
    <v-card-text>
      {{ product.name }}
    </v-card-text>
    <v-chip>
      {{ product.price }}
    </v-chip>
    <v-card-actions>
      <router-link :to="{ name: 'product-details', params: { id: product.id } }">
      <v-btn block @click="onAddButtonClick" > AGREGAR AL CARRITO</v-btn>
    </router-link>
    </v-card-actions>
  </v-card>
</template>