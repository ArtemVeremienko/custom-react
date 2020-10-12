import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '~/routes'
import { routesMap } from '~/routes'
import { Link } from 'react-router-dom'

@observer class App extends React.Component {
  render() {

    const routesComponents = routes.map(({ url, component, exact }) =>
      <Route path={url} component={component}
        exact={exact} key={url} />
    )

    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <Navbar bg="primary" variant="dark">
                <Link to={routesMap.home} className="navbar-brand">Home</Link>
                <Nav className="mr-auto">
                  <Link to={routesMap.cart} className="nav-link">Cart</Link>
                  <Link to={routesMap.order} className="nav-link">Order</Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Navbar>
            </Col>
          </Row>

          <Row>
            <Switch>
              {routesComponents}
            </Switch>
          </Row>
        </Container>
      </Router>
    )
  }
}

export default App;