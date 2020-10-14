import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';
import withStore from '~/hocs/withStore'

class Products extends React.Component {
    render() {
        let productModel = this.props.stores.products;
        let cart = this.props.stores.cart;

        let productsCards = productModel.items.map((product) => {
            let btn;

            if (cart.inCart(product.id)) {
                btn = <Button variant="danger" onClick={() => cart.remove(product.id)}>
                    Remove from cart
                </Button>
            }
            else {
                btn = <Button variant="success" onClick={() => cart.add(product.id)}>
                    Add to cart
                </Button>
            }

            return (
                <Col md={4} className="my-3" key={product.id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <strong>Price: {product.price}</strong>
                            </Card.Text>
                            <Link to={urlBuilder('product', { id: product.id })}>
                                Get more...
                        </Link>
                            <hr />
                            {btn}
                        </Card.Body>
                    </Card>
                </Col>
            )
        });

        return (
            <Col>
                <h1>Products page</h1>
                <Row className="row">
                    {productsCards}
                </Row>
            </Col>
        );
    }
}

export default withStore(Products);
