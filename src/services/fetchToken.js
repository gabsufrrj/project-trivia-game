const url = 'https://opentdb.com/api_token.php?command=request';

const fetchToken = async () => {
  const response = await fetch(url);
  const json = await response.json();
  const { token } = json;
  return token;
};

export default fetchToken;
