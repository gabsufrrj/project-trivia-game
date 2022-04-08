import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import './game.css';

class Game extends React.Component {
  // https://flaviocopes.com/how-to-shuffle-array-javascript/
  // Referência encontrada para randomizar as respostas

  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      answers: [],
      classActive: undefined,
      visibility: 'btn-next-hidden',
      time: 30,

    };
  }

  componentDidMount() {
    this.shuffleAnswers();
    this.updateTime();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleNextQuestion = () => {
    const { history } = this.props;
    const indexNumber = 4;
    const { questionIndex } = this.state;
    this.setState((prev) => ({
      questionIndex: prev.questionIndex + 1,
    }), () => {
      if (questionIndex >= indexNumber) {
        history.push('/feedback');
        // Parte add
      } else {
        this.setState((prevState) => ({
          ...prevState,
          time: 30,
        }));
      }
      this.updateTime();
      this.shuffleAnswers();
    });
    this.setState({ classActive: undefined, visibility: 'btn-next-hidden' });
  }

  handleClick = () => {
    this.setState({ classActive: true, visibility: 'btn-next-visible' });
    clearInterval(this.timer);
  };

  shuffleAnswers = () => {
    const { questions } = this.props;
    const { questionIndex } = this.state;
    const incorrectAnswers = questions[questionIndex].incorrect_answers;
    const correctAnswer = questions[questionIndex].correct_answer;
    const POINT_FIVE = 0.5;
    const allAnswers = [...incorrectAnswers, correctAnswer];
    const allAnswersSorted = allAnswers.sort(() => Math.random() - POINT_FIVE);
    this.setState(() => ({
      answers: allAnswersSorted,
    }));
  }

  updateTime = () => {
    const TIME_LIMIT = 0;
    const ONE_SECOND = 1000;
    this.timer = setInterval(() => {
      const { time } = this.state;
      if (time > TIME_LIMIT) {
        this.setState((prevState) => ({ time: prevState.time - 1 }));
      }
      if (time === TIME_LIMIT) {
        clearInterval(this.timer);
        this.handleClick();
      }
    }, ONE_SECOND);
  };

  render() {
    const { questionIndex, answers, classActive, visibility, time } = this.state;
    const { questions } = this.props;
    return (
      <div>
        <Header />
        <div>{time}</div>
        <h1 data-testid="question-category">
          {questions[questionIndex] && questions[questionIndex].category}
        </h1>
        <p
          data-testid="question-text"
        >
          {questions[questionIndex] && questions[questionIndex].question}

        </p>
        <div data-testid="answer-options">
          {answers.map((ans, index) => (
            <>
              <button
                key={ ans[index] }
                type="button"
                data-testid={ ans === questions[questionIndex].correct_answer
                  ? 'correct-answer'
                  : `wrong-answer-${index}` }
                onClick={ (e) => this.handleClick(e) }
                disabled={ (time === 0) }
                className={ classActive
                  && (
                    ans === questions[questionIndex].correct_answer
                      ? 'green'
                      : 'red') }
              >
                { ans }
              </button>
              <br />
            </>
          ))}
        </div>
        <button
          className={ visibility }
          data-testid="btn-next"
          type="button"
          onClick={ () => this.handleNextQuestion() }
        >
          Next

        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.game.questions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Game);
