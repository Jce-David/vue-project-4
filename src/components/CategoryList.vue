<script lang="ts">
import { useProductsStore } from '@/stores/products';


export default {
    data() {
        return {
            categories: [
                { name: 'Technology', id: 1, description: 'productos para Trabajadores' },
                { name: 'Toys', id: 2, description: 'productos para niños' },
                { name: 'Ropa', id: 3, description: 'productos para Jovenes' },
            ]
        }
    },
    methods: {
        selectCategory(categoryId: number){
            this.$router.push({ name: 'category', params: {categoryId}})
        }
    }
}

</script>
<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item v-for="category in categories" :key="category.id" link @click="selectCategory(category.id)" >
            {{ category.name }}
        </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
        </v-list>
    </v-sheet>
</template>