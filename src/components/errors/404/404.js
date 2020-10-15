import React from 'react'
import { routesMap } from '~/routes'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <Col className="text-sm-center">
      <h1>Error 404, page not found</h1>
      <hr />
      <div className="alert alert-warning">
        <p>
          <Link to={routesMap.home} className="btn btn-outline-info">
            Go to homepage
          </Link>
        </p>
      </div>
    </Col>
  )
}
