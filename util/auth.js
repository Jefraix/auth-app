import axios from "axios";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyC8ZvttVcArHJglM540p_2j_sQC8ErnsDw";

export const createUser = async (email, password) => {
  const response = await axios.post(
    BASE_URL + `/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
