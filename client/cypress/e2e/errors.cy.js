describe('Error handling and edge cases', () => {
  it('shows validation messages on empty form submit', () => {
    cy.visit('/register');
    cy.get('button[type="submit"]').click();
    cy.contains('Email is required').should('be.visible'); // change text to match your UI
  });

  it('prevents access to protected routes when logged out', () => {
    // clear localStorage
    cy.clearLocalStorage();
    cy.visit('/dashboard');
    cy.url().should('include', '/login');
  });
});
