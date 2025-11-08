// Custom cy.login helper - logs in via the API and sets token in localStorage
// Adjust the endpoint and response shape to match your backend.

Cypress.Commands.add('apiLogin', (email, password) => {
  // send request to your backend login endpoint
  cy.request({
    method: 'POST',
    url: 'http://localhost:5000/api/auth/login', // change to your API base
    body: { email, password },
    failOnStatusCode: false,
  }).then((resp) => {
    // expect token in resp.body.token (adjust if your API returns differently)
    const token = resp.body?.token;
    if (token) {
      window.localStorage.setItem('token', token);
    }
    return resp;
  });
});

// Utility to create a test user via API (idempotent if your API handles duplicates)
Cypress.Commands.add('seedUser', (user) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:5000/api/auth/register', // change to your register endpoint
    body: user,
    failOnStatusCode: false,
  });
});

