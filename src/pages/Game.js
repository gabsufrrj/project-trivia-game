import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Game extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div>
        <Header />
        <h1
          data-testeid="question-category"
        >
          Question
          {category}
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
  category: state.game.questions[0].category,
});

Game.propTypes = {
  category: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
