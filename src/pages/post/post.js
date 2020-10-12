import React from 'react'
import { Col } from 'react-bootstrap'

export default (props) => {
  return (
    <Col>
      Post #{props.match.params.some}
    </Col>
  )
}
