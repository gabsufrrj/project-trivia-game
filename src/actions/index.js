import fetchQuestions from '../services/fetchQuestions';
import fetchToken from '../services/fetchToken';

export const INSERT_LOGIN = 'INSERT_LOGIN';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_ANSWER = 'GET_ANSWER';

export const insertLogin = (payload) => ({
  type: INSERT_LOGIN, payload });

export const getToken = (token) => ({ type: GET_TOKEN, token });

export const fetchTokenAction = () => async (dispatch) => {
  const tokenData = await fetchToken();
  dispatch(getToken(tokenData));
};

export const getAnswer = (payload) => ({
  type: GET_ANSWER, payload,
});

export const fetchAnswersAction = () => async (dispatch) => {
  const answerData = await fetchQuestions();
  dispatch(getAnswer(answerData));
};
