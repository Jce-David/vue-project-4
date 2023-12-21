<script lang="ts">

import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/products'
import { mapState } from 'pinia';
import  ShoppingCart from './ShoppingCart.vue';

export default {
  components: {
    ProductCard,
    ShoppingCart
},
  computed: {
    ...mapState(useProductsStore, ['products'])
  }
}
</script>

<template>

<ProductCard v-for="product in products" :product="product" :key="product.id"/>
<ShoppingCart/>
</template>