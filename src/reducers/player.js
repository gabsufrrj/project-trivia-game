import { INSERT_LOGIN, GET_TOKEN } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
  token: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_LOGIN: // !!! utilizamos o user no lugar do name na implementação da handleChange
    return { name: action.payload.user, gravatarEmail: action.payload.email };
  case GET_TOKEN:
    return { token: action.token };
  default:
    return state;
  }
};

export default player;
