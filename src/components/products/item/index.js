import React from 'react'
import { Col, Button } from 'react-bootstrap'

export default ({ title, price, backUrl, LinkComponent, inCart, onAdd, onRemove }) => {

  let btn;
  if (inCart) {
    btn = <Button variant="danger" onClick={onRemove}>Remove from cart</Button>
  } else {
    btn = <Button variant="success" onClick={onAdd}>Add to cart</Button>
  }

  return (
    <Col className="text-md-center">
      <h1>{title}</h1>
      <hr />
      <img src="https://via.placeholder.com/300x400" />
      <div>
        <strong>Price: {price}&#8381;</strong>
      </div>
      <LinkComponent to={backUrl} className="btn btn-primary mr-1">Back to list</LinkComponent>
      {btn}

    </Col>
  )
}
