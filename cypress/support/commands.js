Cypress.Commands.add('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('include', '/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get("button[type='submit']").contains('Login').click();
    cy.url().should('include', '/dashboard');
  });