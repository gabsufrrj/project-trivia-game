import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/fa';
import { insertLogin, fetchTokenAndQuestionsAction } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      isButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toConfig = this.toConfig.bind(this);
  }

  async onSubmit() {
    const {
      history,
      dispatchLogin,
      fetchTokenQuestionsDispatch,
    } = this.props;
    dispatchLogin(this.state);
    await fetchTokenQuestionsDispatch();
    history.push('/game');
  }

  toConfig() {
    const { history } = this.props;
    history.push('/config');
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
            onClick={ () => this.onSubmit() }
          >
            Play
          </button>
          <button
            type="button"
            data-testid="btn-settings"
            onClick={ () => this.toConfig() }
          >
            <FaCog />
          </button>
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload) => { dispatch(insertLogin(payload)); },
  fetchTokenQuestionsDispatch: () => dispatch(fetchTokenAndQuestionsAction()),
});

Home.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  fetchTokenQuestionsDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
