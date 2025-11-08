describe('CRUD E2E (Bugs/Posts)', () => {
  const testUser = { email: 'e2e_crud@example.com', password: 'password123' };

  before(() => {
    // create user and log in via API
    cy.seedUser(testUser);
    cy.apiLogin(testUser.email, testUser.password);
  });

  beforeEach(() => {
    // keep user logged in between tests by setting token
    cy.visit('/'); // load app so localStorage token is available to app
  });

  it('creates a new bug/post', () => {
    cy.visit('/posts'); // adjust path
    cy.get('button#create-new').click(); // adjust selector
    cy.get('input[name="title"]').type('E2E test bug');
    cy.get('textarea[name="content"]').type('Content for E2E test');
    cy.get('button[type="submit"]').click();

    cy.contains('E2E test bug').should('exist');
  });

  it('edits and deletes a bug/post', () => {
    // find the post created above then edit
    cy.contains('E2E test bug').parent().within(() => {
      cy.get('button.edit').click();
    });

    cy.get('input[name="title"]').clear().type('E2E test bug edited');
    cy.get('button[type="submit"]').click();

    cy.contains('E2E test bug edited').should('exist');

    // delete
    cy.contains('E2E test bug edited').parent().within(() => {
      cy.get('button.delete').click();
    });

    // confirm deletion
    cy.contains('E2E test bug edited').should('not.exist');
  });
});
