<script lang="ts">
import CategoryList from '@/components/CategoryList.vue';
import ProductList from '@/components/ProductList.vue';
import { useProductsStore } from '@/stores/products';

function updateCategoryFromRouteParams(categoryIdParams: string | string []){
  const productsStore = useProductsStore();
  const categoryId = Number(categoryIdParams);
  productsStore.selectCategory(categoryId);
}

export default {
  components: {
    ProductList,
    CategoryList
  },
  beforeRouteEnter(to, from){
    updateCategoryFromRouteParams(to.params.categoryId)

  },
  beforeRouteUpdate(to, from){
    updateCategoryFromRouteParams(to.params.categoryId) 
  }
}
</script>

<template>
  <v-row>
    <v-col cols="2">
      <CategoryList />
    </v-col>
    <v-col cols="10">
      <ProductList />
    </v-col>
  </v-row>
</template>
