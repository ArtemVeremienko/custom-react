import React from 'react';
import { Container } from 'react-bootstrap'
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '~/routes'

@observer class App extends React.Component {
  render() {

    const routesComponents = routes.map(({ url, component, exact }) =>
      <Route path={url} component={component}
        exact={exact} key={url} />
    )

    return (
      <Router>
        <Container>
          <Switch>
            {routesComponents}
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App;