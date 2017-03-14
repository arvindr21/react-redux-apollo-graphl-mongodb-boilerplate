import React from 'react'
import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router'

export default class Index extends React.Component {
  static getData(){

  }

  render() {
    return (
      <Row>
        <Col md={6}>
          <h2>Welcome to Selfl.us.</h2>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Search Users</Link></li>
          </ul>
        </Col>
      </Row>
    )
  }
}
