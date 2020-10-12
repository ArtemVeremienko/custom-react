import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import cartModel from '~s/cart.js';
import orderModel from '~s/order.js';

import { urlBuilder } from '~/routes'
import { Link } from 'react-router-dom'

export default () => {
  const postsTmp = [1, 2, 3]
  const links = postsTmp.map(post =>
    <div key={post}>
      <Link to={urlBuilder('blogPost', { some: post })}>
        Post {post}
      </Link>
    </div>
  )
  const { data } = orderModel;

  return (
    <Jumbotron className="text-center">
      <h2>Congratulations {data.name} with your purchase!</h2>
      <p>Total amount: <strong>{cartModel.total}&#8381;</strong></p>
      <div>
        {links}
      </div>
    </Jumbotron>
  )
};