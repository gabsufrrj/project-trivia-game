import { INSERT_LOGIN, SET_SCORE } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_LOGIN: // !!! utilizamos o user no lugar do name na implementação da handleChange
    return {
      ...state,
      name: action.payload.user,
      gravatarEmail: action.payload.email,
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

export default player;
