import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import fetchQuestions from '../services/fetchQuestions';
/* import { getAnswer } from '../actions'; */

class Game extends React.Component {
  async componentDidMount() {
    const { token } = this.props;
    await fetchQuestions(token);
    console.log('aqui', await fetchQuestions(token));
  }

  render() {
    return (
      <div>
        <Header />
        <h1
          data-testeid="question-category"
        >
          Question

        </h1>
        <p
          data-testeid="question-test"
        >
          Test

        </p>
        {/* <button></button>
        <button></button>
        <button></button>
        <button></button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

Game.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
