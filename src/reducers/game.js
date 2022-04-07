import { GET_QUESTIONS, SET_INDEX, SET_SCORE } from '../actions';

const INITIAL_STATE = {
  questions: [],
  index: 0,
  score: 0,
  /* category: '',
    question: '',
    correctAnsw: '',
    incorrectAnswers: [],
    type: '',
    difficulty: '', */
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.payload.results,
    };
  case SET_INDEX:
    return {
      ...state,
      index: action.index,
    };

  case SET_SCORE:
    return {
      ...state,
      score: action.score,
    };

  default:
    return state;
  }
};

export default game;
