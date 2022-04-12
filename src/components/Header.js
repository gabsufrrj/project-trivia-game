import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, email, score, assertions } = this.props;
    const url = md5(email).toString();
    const minAssertions = 3;
    const assertionsMsg = assertions < minAssertions
      ? 'Could be better...' : 'Well Done!';
    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${url}` }
          alt={ name }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
        <p data-testid="feedback-text">{ assertionsMsg }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
  assertions: state.player.assertions,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
