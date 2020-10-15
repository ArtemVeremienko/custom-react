import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes, { routesMap } from '~/routes'
import { Link, NavLink } from 'react-router-dom'
import styles from './app.module.css'

import stores from '~s/rootstore'

@observer class App extends React.Component {
  render() {

    const navbar = (
      <Navbar bg="primary" variant="dark">
        <Link to={routesMap.home} className="navbar-brand">Home</Link>
        <Nav className="mr-auto">
          <NavLink to={routesMap.cart} className="nav-link">Cart</NavLink>
          <NavLink to={routesMap.order} className="nav-link">Order</NavLink>
        </Nav>
        <Link to={routesMap.cart} className={styles.basket}>
          <span className={`fa fa-shopping-cart mr-2 ${styles.cart}`}></span>
          <span className={styles.count}>{stores.cart.count}</span>
        </Link>
      </Navbar>
    )

    const routesComponents = routes.map(({ url, component, exact }) =>
      <Route path={url} component={component}
        exact={exact} key={url} />
    )

    return (
      <Provider stores={stores}>
        <Router>
          <Container>
            <Row>
              <Col>
                {navbar}
              </Col>
            </Row>

            <Row>
              <Switch>
                {routesComponents}
              </Switch>
            </Row>
          </Container>
        </Router>
      </Provider>
    )
  }
}

export default App;
