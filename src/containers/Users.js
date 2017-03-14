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

  // componentWillMount() {
  //   this.props.fetchUsers();
  // }

  componentDidMount() {
    console.log('didMount:props: ', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops:', nextProps)
  }

  render() {
    const {loading, users} = this.props

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
              <li>
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


// const UsersQuery = gql`
//   query UsersQuery {
//     users {
//       _id
//       username
//     }
//   }
// `
export default compose(
  graphql(USERS_QUERY, {
    props({ data: { loading, users } }) {
      return { loading, users }
    }
  })
)(Users)

// const UsersWithData = graphql(UsersQuery)(Users)
//
// export default Users
