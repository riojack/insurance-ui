import {tryLogin, logout} from "../../../app/actions/login";

describe('Login and logout action', () => {
  describe('logging in', () => {
    it('should create an action with type "TRY_LOGIN" and also includes the username and password', () => {
      let loginAction = tryLogin('billybob', 'abc123');
  
      expect(loginAction).toHaveProperty('type', 'TRY_LOGIN');
      expect(loginAction).toHaveProperty('username', 'billybob');
      expect(loginAction).toHaveProperty('password', 'abc123');
    });
  });

  describe('logging out', () => {
    it('should create an action with type "LOGOUT"', () => {
      let logoutAction = logout();
  
      expect(logoutAction).toHaveProperty('type', 'LOGOUT');
    });
  });
});
