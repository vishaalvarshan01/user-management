import {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import Product from '../components/Product.tsx';

import { ProductType } from '../constants/ProductTypes.ts';

const ProductsPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProducts(response.data);
        }).then(() => {
            setIsLoading(false)
        }).catch((error) => {
            setError(true)
            console.log(error);
        }).finally(() => {
            console.log("Finally");
        });
    }, []);

    if (isLoading) return <h1>Loading...</h1>

    if (error) return <h1>Something went wrong</h1>

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={3} key={product.id}>
                    <Product {...product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsPage;