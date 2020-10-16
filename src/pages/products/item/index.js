import React from 'react';
import E404 from '~c/errors/404';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ProductItem from '~c/products/item';
import withStore from '~/hocs/withStore'

class Product extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const product = this.props.stores.products.getById(id);
    const cart = this.props.stores.cart;

    if (product === null) {
      return <E404 />
    } else {
      return <ProductItem
        title={product.title}
        price={product.price}
        backUrl={routesMap.home}
        LinkComponent={Link}
        inCart={cart.inCart(product.id)}
        onAdd={() => cart.add(product.id)}
        onRemove={() => cart.remove(product.id)}
      />
    }
  }
}

export default withStore(Product);
