export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGOUT = 'LOGOUT';

function tryLogin(username, password) {
  return { type: TRY_LOGIN, username, password };
}

function logout() {
  return {type: LOGOUT};
}

export {
  tryLogin,
  logout
}
