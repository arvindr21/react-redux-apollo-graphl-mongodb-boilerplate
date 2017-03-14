import React, { Component, PropTypes } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import update from 'react-addons-update'
import { Grid, Col, Row } from 'react-bootstrap'

import USERS_QUERY from '../graphql/UsersQuery.graphql'

class Users extends Component {

  constructor(args) {
    super(args)
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { loading, users } = this.props

    if (loading) {
      return (
        <Row>
          Loading...
        </Row>
      )
    }

    return (
      <Row>
        <ul>
          {users.map(u => {
            return (
              <li key={u._id}>
                {u.username}
              </li>
            )
          })}
        </ul>
      </Row>
    )
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array
}

export default compose(
  graphql(USERS_QUERY, {
    props({ data: { loading, users } }) {
      return { loading, users }
    }
  })
)(Users)
