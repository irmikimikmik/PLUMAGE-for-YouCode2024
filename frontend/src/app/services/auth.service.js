import axios from "axios";

const API_URL = "/api/users";

const register = (username, email, password) => {
  return axios.post(API_URL, {
    username,
    email,
    password,
  }).then((response) => {
    if (response.data.username) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const login = (email, password) => {
  return axios.post(API_URL, {
    email,
    password,
  }).then((response) => {
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
  // For the demo, we don't need the backend for this
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
