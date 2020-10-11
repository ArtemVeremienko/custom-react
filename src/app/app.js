import React from 'react';
import router from '~s/router';
import { Container } from 'react-bootstrap'
import { observer } from 'mobx-react';

@observer class App extends React.Component {
  render() {
    return (
      <Container>
        {router.component}
      </Container>
    )
  }
}

export default App;