import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button, Paper } from '@material-ui/core';
import CartProduct from '../../components/CartPrduct';
import PayWithPayPal from '../../components/PayWithPaypal';
import './cart.scss';

const renderCartPrduct = (cartProducts) => {
  return cartProducts.map((product) => {
    return <CartProduct product={product} key={product.id} />;
  });
};

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const { cartProducts } = useSelector((state) => state.cartInfo);
  let totalPrice = 0;
  cartProducts.map((product) => {
    totalPrice += product.price * product.selectedQty;
  });

  return isCheckout ? (
    <PayWithPayPal items={cartProducts} total={totalPrice} />
  ) : (
    <React.Fragment>
      <Grid className="cart-page-container" container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <h5 className="price-info">Total Price: {totalPrice}</h5>
            {cartProducts.length > 0 && (
              <Button
                onClick={() => {
                  setIsCheckout(true);
                }}
                variant="contained"
                color="primary"
              >
                Checkout
              </Button>
            )}
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
