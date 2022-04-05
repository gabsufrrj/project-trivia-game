import { INSERT_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_LOGIN: // !!! utilizamos o user no lugar do name na implementação da handleChange
    return { name: action.payload.user, gravatarEmail: action.payload.email };
  default:
    return state;
  }
};

export default player;
