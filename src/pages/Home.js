import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { insertLogin } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      isButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => {
        const { state: { user, email } } = this;
        if (user.length !== 0 && email.length !== 0) {
          this.setState({ isButtonDisabled: false });
        } else {
          this.setState({ isButtonDisabled: true });
        }
      });
  }

  render() {
    const { state: { user, email, isButtonDisabled } } = this;
    const { dispatchLogin } = this.props;
    return (
      <form>
        <fieldset>
          <label htmlFor="user">
            Name:
            <input
              onChange={ this.handleChange }
              data-testid="input-player-name"
              type="text"
              name="user"
              value={ user }
              id="user"
            />
          </label>
          <br />
          <label htmlFor="email">
            Email:
            <input
              onChange={ this.handleChange }
              data-testid="input-gravatar-email"
              type="email"
              name="email"
              value={ email }
              id="email"
            />
          </label>
          <br />
          <button
            type="button"
            data-testid="btn-play"
            disabled={ isButtonDisabled }
            onClick={ () => dispatchLogin(this.state) }
          >
            Play
          </button>
        </fieldset>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload) => { dispatch(insertLogin(payload)); },
});

Home.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
