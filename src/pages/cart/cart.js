import React from 'react';
import AppMinMax from '~c/inputs/minmax';
import { Col, Table, Button } from 'react-bootstrap'
import { routesMap } from '~/routes'
import { Link } from 'react-router-dom'
import withStore from '~/hocs/withStore'
import LinkButton from '~c/links/button'

class Cart extends React.Component {
  render() {
    const cartModel = this.props.stores.cart

    const productsRows = cartModel.productsDetailed.map((product, i) => {
      const { id, title, price, rest, cnt } = product;
      return (
        <tr key={id}>
          <td>{title}</td>
          <td>{price}</td>
          <td>
            <AppMinMax min={1}
              max={rest}
              cnt={cnt}
              onChange={cnt => cartModel.change(id, cnt)}
            />
          </td>
          <td>{price * cnt}</td>
          <td>
            <Button variant="danger"
              onClick={() => cartModel.remove(id)}>
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
        <Link to={routesMap.order} className="btn btn-primary mr-1">
          Send
        </Link>
        <LinkButton to={routesMap.order} className="btn btn-primary">
          Send
        </LinkButton>
      </Col>
    );
  }
}

export default withStore(Cart);
