import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import { Col, Table, Button } from 'react-bootstrap'

import cartModel from '~s/cart.js';
import { observer } from 'mobx-react';

import { routesMap } from '~/routes'
import { Link } from 'react-router-dom'

@observer class Cart extends React.Component {
  render() {
    let productsRows = cartModel.products.map((product, i) => {
      const { id, title, price, rest, current } = product;
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{price}</td>
          <td>
            <AppMinMax min={1}
              max={rest}
              cnt={current}
              onChange={cartModel.changeOn[i]}
            />
          </td>
          <td>{price * current}</td>
          <td>
            <Button variant="danger"
              onClick={() => cartModel.remove(i)}>
              X
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <Col>
        <h2>Cart</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsRows}
          </tbody>
        </Table>
        <h3>Total: {cartModel.total}&#8381;</h3>
        <hr />
        <Link to={routesMap.order} className="btn btn-primary">
          Send
        </Link>
      </Col>
    );
  }
}

export default Cart;