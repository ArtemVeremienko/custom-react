import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap';
import withStore from '~/hocs/withStore'


class Result extends React.Component {
  render() {
    const orderModel = this.props.stores.order
    const cartModel = this.props.stores.cart

    const { data } = orderModel;

    return (
      <Col>
        <Jumbotron className="text-center">
          <h2>Congratulations {data.name} with your purchase!</h2>
          <p>Total amount: <strong>{cartModel.total}&#8381;</strong></p>
        </Jumbotron>
      </Col>
    )
  }
};

export default withStore(Result)
