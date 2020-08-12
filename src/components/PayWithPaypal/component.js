import React, { useState, useEffect, useRef } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function PayWithPayPal(props) {
  const { items, total } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          // return '8JU3097226456720S';
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'store checkout',
                amount: {
                  currency_code: 'INR',
                  value: 9.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log('ORDER', data, order);
        },
        onError: (err) => {
          setError(err);
          console.error('ERROR', err);
        },
      })
      .render(paypalRef.current);
  }, [items]);

  if (paidFor) {
    return <div>Thanks for making the purchase.</div>;
  }

  if (error) {
    return <div>Error in processing order. Please Retry again</div>;
  }

  return (
    <div>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroupItem key={item.name + item.price}>
            {item.name} - Rs. {item.price}
          </ListGroupItem>
        ))}
      </ListGroup>
      <div>Total - Rs. {total}</div>
      <div ref={paypalRef} />
    </div>
  );
}

export default PayWithPayPal;
