import React from 'react';
import AppMinMax from './normal-input';

export default class extends React.Component {
  state = {
    products: [
      {
        id: 100,
        title: 'Ipnone 200',
        price: 12000,
        rest: 10,
        current: 1
      },
      {
        id: 101,
        title: 'Samsung AAZ8',
        price: 22000,
        rest: 5,
        current: 1
      },
      {
        id: 103,
        title: 'Nokia 3310',
        price: 5000,
        rest: 2,
        current: 1
      },
      {
        id: 105,
        title: 'Huawei ZZ',
        price: 15000,
        rest: 8,
        current: 1
      }
    ]
  }

  changeCnt(i, cnt) {
    // по смыслу this.state.products[i].current = cnt;

    let newProducts = [...this.state.products];
    let newProduct = { ...newProducts[i] };
    newProduct.current = cnt;
    newProducts[i] = newProduct;
    this.setState({ products: newProducts });
  }

  onRemove(idx) {
    this.setState(prev => {
      const products = [...prev.products];
      products.splice(idx, 1)
      return { products }
    })
  }

  render() {

    const { products } = this.state;

    let productsRows = products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price} &#8381;</td>
          <td>
            <AppMinMax min={1}
              max={product.rest}
              cnt={product.current}
              onChange={(cnt) => this.changeCnt(i, cnt)}
            />
          </td>
          <td>{product.price * product.current} &#8381;</td>
          <td>
            <button
              onClick={() => this.onRemove(i)}
              className="btn btn-outline-danger"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      );
    });

    let total = products.reduce((sum, product) => sum + (product.price * product.current), 0);

    return (
      <div style={{ margin: '1rem auto', maxWidth: '700px' }}>
        <h2>Order table:</h2>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {productsRows}
          </tbody>
          <tfoot>
            <tr className="table-info">
              <th colSpan="4" scope="row" style={{ textAlign: 'right' }}>Total:</th>
              <td style={{ fontWeight: 'bold' }}>{total} &#8381;</td>
            </tr>
          </tfoot>
        </table>

      </div>
    );
  }
}