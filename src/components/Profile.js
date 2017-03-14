import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import NavbarLink from './NavbarLink';

@connect(
    state=>({
        isAuthenticated: state.auth.authenticated,
        loading: state.user.loading,
        currentUser: state.user.currentUser
    })
)
export default class Profile extends Component {

  render() {
    let { loading, currentUser } = this.props;

    if (loading) {
      return (
        <p className="navbar-text navbar-right">
          Loading...
        </p>
      );
    } else if (currentUser) {
      return (
        <span>
          <p className="navbar-text navbar-right">
            {currentUser.username}
            &nbsp;&nbsp;
            <Link to="/logout">Log out</Link>
          </p>
        </span>
      );
    }

    return (
      <ul className="nav navbar-nav navbar-right">
        <NavbarLink
          title="Sign In"
          href="/login"
          active={location.pathname.indexOf('login') !== -1}
        />
        <NavbarLink
          title="Sign Up"
          href="/signup"
          active={location.pathname.indexOf('signup') !== -1}
        />
      </ul>
    );
  }
}

Profile.propTypes = {
  loading: React.PropTypes.bool,
  currentUser: React.PropTypes.shape({
    username: React.PropTypes.string.isRequired,
  }),
};
