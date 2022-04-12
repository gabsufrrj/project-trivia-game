import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  goToHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  goToRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { assertions, totalScore } = this.props;
    const minAssertions = 3;
    const assertionsMsg = assertions < minAssertions
      ? 'Could be better...' : 'Well Done!';
    return (
      <div data-testid="feedback-text">
        <Header />
        <p data-testid="feedback-total-score">{ `${totalScore}` }</p>
        <p data-testid="feedback-total-question">
          { `${assertions}` }
        </p>
        <p data-testid="feedback-text">{ assertionsMsg }</p>
        <button type="button" data-testid="btn-play-again" onClick={ this.goToHome }>
          Play Again
        </button>
        <button type="button" data-testid="btn-ranking" onClick={ this.goToRanking }>
          Ranking
        </button>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  totalScore: state.player.score,

});

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  assertions: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
