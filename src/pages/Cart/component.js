import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CartProduct from "../../components/CartPrduct";
import Paper from "@material-ui/core/Paper";
import "./cart.scss";

const renderCartPrduct = cartProducts => {
  return cartProducts.map(product => {
    return <CartProduct product={product} key={product.id} />;
  });
};

const Cart = () => {
  const { cartProducts } = useSelector(state => state.cartInfo);
  let totalPrice = 0;
  cartProducts.map(product => {
    totalPrice += product.price * product.selectedQty;
  });

  return (
    <React.Fragment>
      <Grid className="cart-page-container" container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <h5 className="price-info">Total Price: {totalPrice}</h5>
          </Paper>
        </Grid>
        {cartProducts.length === 0 ? (
          <p>Cart is Empty Please Add Prduct</p>
        ) : (
          renderCartPrduct(cartProducts)
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Cart;
