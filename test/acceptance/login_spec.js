describe('Login', () => {
  describe('when the user is not logged in', () => {
    it('should present the login fields: username field, password field, and "Login" button', () => {
      cy.visit('http://127.0.0.1:3320/');

      cy.get('input[placeholder="E-mail"]').should('be.visible');
      cy.get('input[type="Password"]').should('be.visible');
    });
  });
});
