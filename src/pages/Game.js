import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Game extends React.Component {
  // https://flaviocopes.com/how-to-shuffle-array-javascript/ Referência encontrada para randomizar as respostas

  constructor() {
    super();
    this.state = {
      questionIndex: 0,
      answers: [],
    };
  }

  componentDidMount() {
    this.shuffleAnswers();
    // this.handleNextQuestion();
  }

  // componentDidUpdate() {
  //   this.shuffleAnswers();
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
  }

  shuffleAnswers = () => {
    const { questions } = this.props;
    const { questionIndex } = this.state;
    console.log(questionIndex);
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
    console.log(questionIndex);
    // console.log(answers);
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
                key={ index }
                type="button"
                data-testid={ ans === questions[questionIndex].correct_answer
                  ? 'correct-answer'
                  : `wrong-answer-${index}` }
              >
                { ans }
              </button>
              <br />
            </>
          ))}
        </div>
        <button
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
  questions: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  // correctAnswer: PropTypes.string.isRequired,
  // incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Game);
