import { INSERT_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_LOGIN:
    return { name: action.payload.name, gravatarEmail: action.payload.email };
  default:
    return state;
  }
};

export default player;
