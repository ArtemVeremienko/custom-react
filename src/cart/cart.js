import React from 'react';
import AppMinMax from '../inputs/minmax/minmax.js';
import OrderForm from '../order-form/order-form'
import Modal from '../modal/modal'
import styles from './cart.module.css';

export default class extends React.Component {
  state = {
    products: [],
    formData: null,
    formDone: false,
    showModal: false,
    showCograts: false,
  }

  componentDidMount() {
    this.setState({ products: this.props.products })
  }


  changeCnt(i, cnt) {
    let products = [...this.state.products];
    products[i] = { ...products[i], current: cnt };
    this.setState({ products });
  }

  remove(i) {
    // let products = [...this.state.products].filter((pr, j) => j !== i)
    let products = [...this.state.products];
    products.splice(i, 1);
    this.setState({ products });
  }

  sendForm = () => {
    this.setState({ formDone: true });
  }

  confirmForm = (formData) => {
    this.setState({ showModal: true, formData })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  showCograts = () => {
    this.setState({ showCograts: true })
  }

  render() {
    if (this.state.showCograts) return <h2>Congratulations on your purchase</h2>

    if (this.state.showModal) {
      return <Modal formData={this.state.formData} showCongrats={this.showCograts}
        closeModal={this.closeModal} />
    }

    let total = this.state.products.reduce((t, pr) => {
      return t + (pr.current * pr.price);
    }, 0);

    let productsRows = this.state.products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <AppMinMax min={1}
              max={product.rest}
              cnt={product.current}
              onChange={(cnt) => this.changeCnt(i, cnt)}
            />
          </td>
          <td>{product.price * product.current}</td>
          <td>
            <button className="btn btn-danger" onClick={() => this.remove(i)}>
              X
                        </button>
          </td>
        </tr>
      );
    });

    let page = this.state.formDone ?
      <OrderForm showModal={this.confirmForm} formData={this.state.formData} /> :
      <ShowForm productsRows={productsRows} total={total} onSend={this.sendForm} />;

    return (
      <div className="container">
        {page}
        <hr />
        <button
          onClick={() => this.changeCnt(1, 4)}>
          Unreal change cnt
        </button>
        <input className={styles.input} />
      </div >
    );
  }
}

function ShowForm({ productsRows, total, onSend }) {
  return (
    <div>
      <h2>Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Count</td>
            <td>Total</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {productsRows}
        </tbody>
      </table>
      <h3>Total: {total}</h3>
      <hr />
      <button className="btn btn-primary" onClick={onSend}>Send</button>
    </div>
  );
}

