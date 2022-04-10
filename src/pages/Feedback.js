import React, { Component } from 'react';
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
    return (
      <div data-testid="feedback-text">
        <Header />
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

Feedback.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Feedback;
