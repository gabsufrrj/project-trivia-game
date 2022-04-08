import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import './game.css';

class Game extends React.Component {
  // https://flaviocopes.com/how-to-shuffle-array-javascript/ Referência encontrada para randomizar as respostas

  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      answers: [],
      green: 'border: 3px solid rgb(6, 240, 15)',
      red: 'border: 3px solid rgb(255, 0, 0)',
      //
      visibility: 'visibility: visible',
      //
    };
  }

  componentDidMount() {
    this.shuffleAnswers();
    // this.handleNextQuestion();
  }

  // componentDidUpdate() {
  //   this.handleClick();
  // }

  handleNextQuestion = () => {
    const { history } = this.props;
    const indexNumber = 4;
    const { questionIndex } = this.state;
    this.setState((prev) => ({
      questionIndex: prev.questionIndex + 1,
    }), () => {
      if (questionIndex >= indexNumber) {
        history.push('/feedback');
      }
      this.shuffleAnswers();
    });
    this.removeStyle();
  }

  removeStyle = () => {
    const wrongAnswer = [...document.querySelectorAll('#wrong-ans')];
    const correctAnswer = document.querySelector('#correct-ans');
    const btnVisibility = document.querySelector('.btn-next');
    console.log(correctAnswer);
    wrongAnswer.forEach((ele) => {
      ele.removeAttribute('style');
    });
    correctAnswer.removeAttribute('style');
    btnVisibility.removeAttribute('style');
  }

  addStyle = () => {
    const { red, green, visibility } = this.state;
    const wrongAnswer = [...document.querySelectorAll('#wrong-ans')];
    const correctAnswer = document.querySelector('#correct-ans');
    const btnVisibility = document.querySelector('.btn-next');
    wrongAnswer.forEach((ele) => {
      ele.setAttribute('style', red);
    });
    correctAnswer.setAttribute('style', green);
    btnVisibility.setAttribute('style', visibility);
  }

  handleClick = () => {
    this.addStyle();
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

  render() {
    const { questionIndex, answers } = this.state;
    const { questions } = this.props;
    return (
      <div>
        <Header />
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
                key={ ans }
                type="button"
                data-testid={ ans === questions[questionIndex].correct_answer
                  ? 'correct-answer'
                  : `wrong-answer-${index}` }
                id={ ans === questions[questionIndex].correct_answer
                  ? 'correct-ans'
                  : 'wrong-ans' }
                onClick={ () => this.handleClick() }

              >
                { ans }
              </button>
              <br />
            </>
          ))}
        </div>
        <button
          className="btn-next"
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
  // correctAnswer: state.game.questions.correct_answers,
  // incorrectAnswers: state.game.questions.incorrect_answers,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  // correctAnswer: PropTypes.string.isRequired,
  // incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Game);
