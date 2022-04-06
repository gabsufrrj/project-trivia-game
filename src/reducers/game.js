import { GET_ANSWER } from '../actions';

const INITIAL_STATE = {
  questions: [{
    /* category: '',
    question: '',
    correctAnsw: '',
    incorrectAnswers: [],
    type: '',
    difficulty: '', */
  }],
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_ANSWER:
    return {
      ...state,
      questions: action.payload,
    };
  default:
    return state;
  }
};

export default game;
