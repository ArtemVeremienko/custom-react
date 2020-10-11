import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import { observer } from 'mobx-react';

import cartModel from '~s/cart.js';
import orderModel from '~s/order.js';

export default observer(() => {
  const { values } = orderModel;

  return (
    <Jumbotron className="text-center">
      <h2>Congratulations {values.name} with your purchase!</h2>
      <p>Total amount: <strong>{cartModel.total}&#8381;</strong></p>
    </Jumbotron>
  )
});