<script lang="ts">
import { useUniqueStore } from '@/stores/unique';
import { mapState } from 'pinia';
import UniqueProduct from './UniqueProduct.vue';



export default {
    computed: {
    ...mapState(useUniqueStore, ['detailsProduct'])
  },
  components: { UniqueProduct }
}



</script>

<template>
       <UniqueProduct v-for="detail in detailsProduct"  :key="detail.product.id" :detail="detail"  />
</template> 