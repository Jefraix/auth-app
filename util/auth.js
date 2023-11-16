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

  console.log(response.data);
};

export const createUser = async (email, password) => {
  await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  await authenticate("signInWithPassword", email, password);
};
