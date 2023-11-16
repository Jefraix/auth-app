import axios from "axios";

const BASE_URL_ACCOUNTS = "https://identitytoolkit.googleapis.com/v1/accounts:";
const API_KEY = "AIzaSyC8ZvttVcArHJglM540p_2j_sQC8ErnsDw";

const authenticate = async (mode, email, password) => {
  const url = BASE_URL_ACCOUNTS + mode + `?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
