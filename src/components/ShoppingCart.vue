<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import shoppingCartItem from './shoppingCartItem.vue';


export default {
  computed: {
    ...mapState(useCartStore, ['detailsCart'])
  },
  components: { shoppingCartItem }
}

</script>

<template>
      <shoppingCartItem v-for="detail in detailsCart" :detail="detail" :key="detail.product.id" />
  
</template>