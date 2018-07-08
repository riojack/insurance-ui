import tryLogin from "../../../app/actions/login";

describe('Login action', () => {
  it('should create an action with type "TRY_LOGIN" and also includes the username and password', () => {
    let loginAction = tryLogin('billybob', 'abc123');

    expect(loginAction).toHaveProperty('type', 'TRY_LOGIN');
    expect(loginAction).toHaveProperty('username', 'billybob');
    expect(loginAction).toHaveProperty('password', 'abc123');
  });
});
