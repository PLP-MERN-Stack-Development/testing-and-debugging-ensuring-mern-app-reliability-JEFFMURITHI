describe('UI snapshot - homepage', () => {
  it('homepage snapshot', () => {
    cy.visit('/');
    cy.matchImageSnapshot('homepage');
  });
});
