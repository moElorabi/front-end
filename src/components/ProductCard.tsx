import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ProductCardProps } from "../types/interfaces";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../actions/market-action";

const ProductCard: React.FC<ProductCardProps> = ({ name, img }) => {
  const disptach = useDispatch();
  const cart = useSelector((state: any) => state.market.cart);

  const handleAddToCart = () => {
    disptach(setCart([...cart, { name }]));
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, height: 250 }}>
        <CardMedia
          sx={{ height: 140, backgroundSize: "contain" }}
          image={img}
          title={name}
        />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            className="product-card-name"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Button size="small" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
