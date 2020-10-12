import React from 'react'
import { Col, Image } from 'react-bootstrap'

import cartModel from '~s/cart'
import { routesMap } from '~/routes'
import { Link } from 'react-router-dom'

export default (props) => {
  const id = parseInt(props.match.params.id)
  const { title, rest, price } = cartModel.getProduct(id)

  return (
    <Col className="text-md-center my-3">
      <Image src="https://via.placeholder.com/180" roundedCircle />
      <h2>{title}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, libero autem. Sequi corporis ex fuga numquam unde, laudantium nobis natus.</p>
      <p>Today we have {rest} products</p>
      <p>This produce cost: <strong>{price}</strong></p>
      <Link to={routesMap.home} className="btn btn-primary mr-2">Back</Link>
      <Link to={routesMap.cart} className="btn btn-success">Buy it</Link>
    </Col>
  )
}
