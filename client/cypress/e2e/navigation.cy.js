describe('Navigation', () => {
  it('navigates main pages', () => {
    cy.visit('/');
    cy.contains('Home').should('exist');

    cy.get('a[href="/about"]').click();
    cy.url().should('include', '/about');
    cy.contains('About').should('exist');

    cy.get('a[href="/contact"]').click();
    cy.url().should('include', '/contact');
    cy.contains('Contact').should('exist');
  });
});
