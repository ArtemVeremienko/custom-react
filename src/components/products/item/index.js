import React from 'react'
import { Col } from 'react-bootstrap'

export default ({ title, price, LinkComponent, backUrl }) => {
  return (
    <Col className="text-md-center">
      <h1>{title}</h1>
      <hr />
      <div>
        <strong>Price: {price}</strong>
      </div>
      <LinkComponent to={backUrl} className="btn btn-primary">Back to list</LinkComponent>
    </Col>
  )
}
