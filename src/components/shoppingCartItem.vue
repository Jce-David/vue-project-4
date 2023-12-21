<script lang="ts">
import type { CartDetail } from '@/model/types';
import { useCartStore } from '@/stores/cart';
import type { PropType } from 'vue';


export default {
    props: {
        detail : {
            type : Object as PropType<CartDetail>,
            required: true
        }
    },
    computed:{
        details(){
            const cartStore = useCartStore();
            return cartStore.detailsCart
        }
    }
}
</script>
<template>
   <p> {{ detail.product.name }} </p>
</template>