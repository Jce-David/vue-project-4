export interface Product { 
    name: string;
    id: number;
    price: number;
    categoryId: number;
    image: string;
}

export interface CartDetail {
    product: Product;
    quantity: number;
}