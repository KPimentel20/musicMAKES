import tokenService from "./tokenService";

const BASE_URL = "/api/users/";

function signup(user) {
  return (
    fetch(BASE_URL + "signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Email already taken!");
      })
      .then(({ token }) => tokenService.setToken(token))
  );
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

const userService = {
  signup,
  logout,
  login,
  getUser,
};

export default userService;
