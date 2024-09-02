import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import useCart from '../store/CartStore.ts';
import {ProductType} from '../constants/ProductTypes.ts';

const Product = (product: ProductType) => {

    const addToCart = useCart((state) => state.addToCart);

    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardMedia
                sx={{height: 140}}
                image={product.image}
                title={product.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy</Button>
                <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
};

export default Product;