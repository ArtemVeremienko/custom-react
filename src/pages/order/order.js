import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import router from '~s/router';
import cartModel from '~s/cart';
import orderModel from '~s/order';

import { observer } from 'mobx-react';

@observer class Order extends React.Component {

  state = {
    showModal: false
  }

  show = () => {
    this.setState({ showModal: true });
  }

  hide = () => {
    this.setState({ showModal: false });
  }

  confirm = () => {
    this.hide();
    router.moveTo('result');
  }

  render() {
    let formFields = [];

    for (let key in orderModel.formData) {
      let { label, type, value, pattern } = orderModel.formData[key];

      formFields.push(
        <Form.Group key={key} controlId={'order-form-' + key}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            type={type}
            value={value}
            onChange={(e) => orderModel.changeField(key, e.target.value)}
          />
        </Form.Group>
      );
    }

    const { name, email, phone } = orderModel.values

    return (

      <div>
        <h2>Order</h2>

        <hr />

        <Form>
          {formFields}
        </Form>

        <Button variant="warning" onClick={() => router.moveTo('cart')}>
          Back to cart
          </Button>
          &nbsp;
        <Button variant="primary" onClick={this.show}>
          Apply order
          </Button>


        <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Check information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Dear <strong>{name}</strong> you purchase for ${cartModel.total} ready.</p>
            <p>We send confirmation at {email} and {phone}.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hide}>
              Ooops
            </Button>
            <Button variant="primary" onClick={this.confirm}>
              All right
            </Button>
          </Modal.Footer>
        </Modal>
      </div >
    )
  }
}

export default Order;