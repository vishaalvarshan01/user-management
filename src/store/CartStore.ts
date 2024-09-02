import {create} from 'zustand';
import {ProductType} from '../constants/ProductTypes.ts';

type ProductState = {
    products: ProductType[],
    addToCart: (product: ProductType) => void;
    removeFromCart: (product: ProductType) => void;
}

const useCart = create<ProductState>((set) => ({
    products: [],
    addToCart: (product: ProductType) => set((state) => {
        console.log("Adding to cart");
        return {

            products: [...state.products, product]
        }
    }),
    removeFromCart: (product: ProductType) => set((state) => {
        console.log("Removing from cart");
        return {
            products: state.products.filter((p) => p.id !== product.id)
        }
    }),
}));

export default useCart;
