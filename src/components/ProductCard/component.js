import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NumericInput from "react-numeric-input";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../../actions/cartAction";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imgUrl, availableQty } = product;
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [selectedQty, setSelectedQty] = useState(1);

  const addProductToCart = product => {
    dispatch(addProductInCart({ ...product, selectedQty }));
    addToast("Product Added Successfully", {
      appearance: "success",
      autoDismiss: true
    });
  };

  return (
    <Grid className="product-card-wrapper" item xs={12} sm={4} lg={3}>
      <Paper>
        <img src={imgUrl} alt={name} />
        <div className="text-wrapper">
          <h5>{name}</h5>
          <h5>price : {price}</h5>
          <h5>Total Price: {price * selectedQty}</h5>
          <NumericInput
            value={selectedQty}
            onChange={e => {
              setSelectedQty(e);
            }}
            min={1}
            max={availableQty}
            mobile
          />
          <Button
            onClick={() => addProductToCart(product)}
            variant="contained"
            color="primary"
          >
            Add to Cart
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
