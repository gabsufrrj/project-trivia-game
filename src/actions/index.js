import fetchQuestions from '../services/fetchQuestions';
import fetchToken from '../services/fetchToken';

export const INSERT_LOGIN = 'INSERT_LOGIN';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SET_INDEX = 'SET_INDEX';
export const SET_SCORE = 'SET_SCORE';
export const HANDLE_ANSWER = 'HANDLE_ANSWER';
export const NEXT_QUESTION = 'NEXT_QUESTION';

export const insertLogin = (payload) => ({
  type: INSERT_LOGIN, payload });

export const getToken = (token) => ({ type: GET_TOKEN, token });

export const getQuestions = (payload) => ({
  type: GET_QUESTIONS, payload,
});

export const fetchTokenAndQuestionsAction = () => async (dispatch) => {
  const tokenData = await fetchToken();
  localStorage.setItem('token', tokenData);
  dispatch(getToken(tokenData));
  const questionsData = await fetchQuestions();
  dispatch(getQuestions(questionsData));
};

// export const setIndex = (index) => ({
//   type: SET_INDEX, index,
// });

// export const setScore = (score) => ({
//   type: SET_SCORE, score,
// });

// export const handleUserAnswer = (payload) => ({ type: HANDLE_ANSWER, payload });

// export const nextQuestion = (payload) => ({ type: NEXT_QUESTION, payload });

// export const fetchAnswersAction = () => async (dispatch) => {
//   const answerData = await fetchQuestions();
//   dispatch(getAnswer(answerData));
// };
