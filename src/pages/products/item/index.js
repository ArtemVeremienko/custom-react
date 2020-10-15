import React from 'react';
import E404 from '~c/errors/404';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { routesMap } from '~/routes';
import ProductItem from '~c/products/item';
import withStore from '~/hocs/withStore'

class Product extends React.Component {
  render() {
    const id = parseInt(this.props.match.params.id);
    const product = this.props.stores.products.getById(id);

    const cart = this.props.stores.cart;
    let btn;
    if (cart.inCart(id)) {
      btn = <Button variant="danger" onClick={() => cart.remove(id)}>Remove from cart</Button>
    } else {
      btn = <Button variant="success" onClick={() => cart.add(id)}>Add to cart</Button>
    }

    if (product === null) {
      return <E404 />
    } else {
      return <ProductItem
        title={product.title}
        price={product.price}
        backUrl={routesMap.home}
        cartUrl={routesMap.cart}
        LinkComponent={Link}
        btn={btn}
      />
    }
  }
}

export default withStore(Product);
