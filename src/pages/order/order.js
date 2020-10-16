import React from 'react';
import { Col, Form, Button, Modal } from 'react-bootstrap';
import { routesMap } from '~/routes'
import { Link } from 'react-router-dom'
import withStore from '~/hocs/withStore'

class Order extends React.Component {

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
    this.props.history.push(routesMap.result)
  }

  render() {
    const cartModel = this.props.stores.cart
    const orderModel = this.props.stores.order

    let formFields = [];

    for (let key in orderModel.formData) {
      let { label, value, valid, errorText } = orderModel.formData[key];

      formFields.push(
        <Form.Group key={key} controlId={'order-form-' + key}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            value={value}
            onChange={(e) => orderModel.change(key, e.target.value)}
          />
          {!valid && <Form.Text className="text-muted">{errorText}</Form.Text>}
        </Form.Group>
      );
    }

    const { name, email, phone } = orderModel.data

    return (
      <>
        <Col>
          <h2> Order</h2>

          <hr />

          <Form>
            {formFields}
          </Form>

          <Link className="btn btn-warning" to={routesMap.cart}>
            Back to cart
        </Link>
        &nbsp;
        <Button variant="primary" onClick={this.show}
            disabled={!orderModel.formValid}
          >
            Apply order
        </Button>


          <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
            <Modal.Header closeButton>
              <Modal.Title>Check information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Dear <strong>{name}</strong> you purchase for {cartModel.total}&#8381; ready.</p>
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
        </Col>
      </>
    )
  }
}

export default withStore(Order);
