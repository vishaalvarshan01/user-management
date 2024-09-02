import {create} from 'zustand';
// import { ProductType } from '../constants/ProductTypes.ts';

const useStore = create(() => ({
    products: [],
    counterValue : 0,

}));

export default useStore;
