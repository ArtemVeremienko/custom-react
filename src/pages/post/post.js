import React from 'react'
import E404 from '~c/errors/404'

export default (props) => {
  return (
    <div>
      Post #{props.match.params.some}
    </div>
  )
}