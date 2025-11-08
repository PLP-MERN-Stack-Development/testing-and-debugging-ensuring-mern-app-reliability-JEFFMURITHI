describe("Bug CRUD E2E", () => {
  const testBug = {
    title: "Login issue",
    updatedTitle: "Login issue - updated",
    description: "Login fails when invalid credentials are used",
    updatedDescription: "Fixed login issue after backend patch",
    priority: "High",
  };

  beforeEach(() => {
    // Visit login page and log in (if authentication is required)
    cy.visit("http://localhost:5173/login");

    cy.get('input[name="email"]').type("e2e_test@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    // Confirm redirection to dashboard
    cy.url().should("include", "/dashboard");

    // Navigate to bugs page
    cy.visit("http://localhost:5173/bugs");

    // Wait for bug list to load
    cy.wait(2000);
  });

  it("creates a new bug", () => {
    cy.contains("Add Bug").click();

    cy.get('input[name="title"]').clear().type(testBug.title);
    cy.get('textarea[name="description"]').clear().type(testBug.description);
    cy.get('select[name="priority"]').select(testBug.priority);

    cy.get('button[type="submit"]').click();

    // Wait for refresh
    cy.wait(2000);

    cy.contains(testBug.title, { timeout: 10000 }).should("exist");
  });

  it("edits an existing bug", () => {
    // Revisit the bugs page to ensure list is reloaded
    cy.visit("http://localhost:5173/bugs");
    cy.wait(2000);

    // Wait for the bug to appear before clicking it
    cy.contains(testBug.title, { timeout: 15000 }).should("exist").click();

    // If modal or form appears
    cy.contains("Edit").click();

    cy.get('input[name="title"]').clear().type(testBug.updatedTitle);
    cy.get('textarea[name="description"]').clear().type(testBug.updatedDescription);
    cy.get('button[type="submit"]').click();

    cy.wait(2000);
    cy.contains(testBug.updatedTitle, { timeout: 10000 }).should("exist");
  });

  it("deletes a bug", () => {
    cy.visit("http://localhost:5173/bugs");
    cy.wait(2000);

    cy.contains(testBug.updatedTitle, { timeout: 15000 }).should("exist").click();
    cy.contains("Delete").click();

    cy.on("window:confirm", () => true);
    cy.wait(2000);

    cy.contains(testBug.updatedTitle).should("not.exist");
  });
});
