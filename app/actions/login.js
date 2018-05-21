export const TRY_LOGIN = 'TRY_LOGIN';

export function tryLogin(username, password) {
  return { type: TRY_LOGIN, username, password };
}
