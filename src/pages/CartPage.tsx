import useCart from '../store/CartStore.ts';
import {ProductType} from "../constants/ProductTypes.ts";
import {useEffect} from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
    const {products, removeFromCart} = useCart();

    useEffect(() => {
        console.log(products);
    }, [products]);

    if (products.length === 0) return <h2>Your cart is empty, try adding something</h2>;

    return (
        <div>
            <h1>Cart Page</h1>
            {products.map((product: ProductType) => (
                <Box key={product.id} sx={{display: 'flex', justifyContent:'space-around', alignContent:'center'}}>
                    <Typography variant="h4">{product.title}</Typography>
                    <DeleteIcon onClick={() => removeFromCart(product)}/>
                </Box>
            ))}
        </div>
    );
};

export default CartPage;