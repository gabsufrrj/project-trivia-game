import fetchToken from '../services/fetchToken';

export const INSERT_LOGIN = 'INSERT_LOGIN';
export const GET_TOKEN = 'GET_TOKEN';

export const insertLogin = (payload) => ({
  type: INSERT_LOGIN, payload });

export const getTokenAction = (token) => ({
  type: GET_TOKEN,
  token,
});

export const requestToken = () => async (dispatch) => {
  const token = await fetchToken();
  dispatch(getTokenAction(token));
};
