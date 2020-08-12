import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../actions/cartAction";
import "./CartProduct.scss";

const CartPrduct = ({ product }) => {
  const { name, price, imgUrl, selectedQty } = product;
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const removeProduct = product => {
    dispatch(removeProductFromCart(product));
    addToast("Product Removed", {
      appearance: "success",
      autoDismiss: true
    });
  };

  return (
    <Grid className="product-cart-wrapper" item xs={12} sm={4} lg={3}>
      <Paper>
        <img src={imgUrl} alt={name} />
        <div className="text-wrapper">
          <h5>{name}</h5>
          <h5>Price: {price}</h5>
          <h5>SelectedQty: {selectedQty}</h5>
          <h5>Total Price: {price * selectedQty}</h5>
          <Button
            onClick={() => removeProduct(product)}
            variant="contained"
            color="primary"
          >
            Remove
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default CartPrduct;
