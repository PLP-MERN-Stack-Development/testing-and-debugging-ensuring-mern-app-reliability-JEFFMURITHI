describe('Auth E2E', () => {
  const baseUrl = 'http://localhost:5173'; // ✅ Use full URL to avoid 404
  const testUser = {
    email: 'e2e_test@example.com',
    password: 'password123',
  };

  before(() => {
    // Optional: Seed a test user via API if your backend supports it
    // Replace the URL below with your actual backend endpoint
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/auth/register',
      body: testUser,
      failOnStatusCode: false, // ignore if user already exists
    });
  });

  it('allows a user to log in via UI', () => {
    cy.visit(`${baseUrl}/login`);

    cy.get('input[name="email"]').clear().type(testUser.email);
    cy.get('input[name="password"]').clear().type(testUser.password);
    cy.get('button[type="submit"]').click();

    // ✅ Adjust the assertions to match your app behavior
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('exist');
  });

  it('rejects wrong credentials', () => {
    cy.visit(`${baseUrl}/login`);

    cy.get('input[name="email"]').clear().type('wrong@example.com');
    cy.get('input[name="password"]').clear().type('badpass');
    cy.get('button[type="submit"]').click();

    // ✅ Adjust this based on your app’s error message
    cy.contains('Invalid credentials').should('be.visible');
  });
});
