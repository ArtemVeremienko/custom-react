import React from 'react'
import { Col, Card, Row } from 'react-bootstrap'

import cartModel from '~s/cart'
import { routesMap, urlBuilder } from '~/routes'
import { Link } from 'react-router-dom'

export default () => {
  const items = cartModel.products.map(({ title, id }) =>
    <Col className="m-3" key={id}>
      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src="https://via.placeholder.com/180x100" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
          <Link to={urlBuilder('product', { id })} className="btn btn-primary mr-2">Info</Link>
          <Link to={routesMap.cart} className="btn btn-success">Go to order</Link>
        </Card.Body>
      </Card>
    </Col>
  )

  return (
    <>
      {items}
    </>
  )
}
