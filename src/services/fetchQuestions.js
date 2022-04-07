const fetchQuestions = async () => {
  const token = localStorage.getItem('token');
  const questions = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(questions);
  const data = await response.json();
  /* console.log('aqui', data); */
  return data;
};

export default fetchQuestions;

/* https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}  */
