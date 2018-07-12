describe('Login', () => {
  describe('when the user is not logged in', () => {
    it('should present the login fields: username field, password field, and "Login" button', () => {
      cy.visit('http://127.0.0.1:3320/');

      cy.get('input[placeholder="E-mail"]').should('be.visible');
      cy.get('input[type="Password"]').should('be.visible');
    });
  });

  describe('when the user has logged in', () => {
    before(() => {
      cy.visit('http://127.0.0.1:3320/');

      cy.get('input[placeholder="E-mail"]').type('dora@explora.org');
      cy.get('input[type="Password"]').type('¿donde esta mi amigo boots?');
      cy.contains('Login').click();
    });

    it('should no longer have the login fields', () => {
      cy.get('input[placeholder="E-mail"]').should('not.exist');
      cy.get('input[type="Password"]').should('not.exist');
    });

    it('should have a "Logout" button that exits back to the login form', () => {
      cy.contains('Log out').click();

      cy.get('input[placeholder="E-mail"]').should('be.visible');
      cy.get('input[type="Password"]').should('be.visible');
    });
  });
});
