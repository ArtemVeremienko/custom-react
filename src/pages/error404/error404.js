import React from 'react';
import { Col } from 'react-bootstrap'
import E404 from '~c/errors/404';

export default () => {
  return (
    <Col className="text-md-center"><E404 /></Col>
  );
}