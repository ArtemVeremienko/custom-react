import React from 'react'
import { routesMap } from '~/routes'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <h1>Error 404, page not found</h1>
      <hr />
      <div className="alert alert-warning">
        <p>
          <Link to={routesMap.home}>
            Go to homepage
          </Link>
        </p>
      </div>
    </>
  )
}