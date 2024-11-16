describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login');
  });

  it('Should Navigate to the login page', () => {
    cy.url().should('include', '/login');
  });

  it('Should display OrangeHRM on the login page', () => {
    cy.get('.orangehrm-login-branding').should('exist');
  });

  it('Should display OrangeHRM Logo on the login page', () => {
    cy.get('.orangehrm-login-logo').should('exist');
  });

  it('should not login with invalid credentials', () => {
    cy.get('input[name="username"]').type('Adm')
    cy.get('input[name="password"]').type('admin1235')
    cy.get("button[type='submit']").contains('Login').click()
    cy.get('.oxd-alert--error').should('have.text', 'Invalid credentials')
  });

  it('should display error message upon attempt to login with empty text fields', () => {
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').clear();
    cy.get("button[type='submit']").contains('Login').click();
    cy.get('.oxd-input-field-error-message').eq(0).should('have.text', 'Required');
    cy.get('.oxd-input-field-error-message').eq(1).should('have.text', 'Required');
  });
  

  it('Should be able to Reset password', () => {
    cy.get('.orangehrm-login-forgot-header').contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get('h6').should('have.text', 'Reset Password')
    cy.get('input[name="username"]').type('Admin')
    cy.get('.orangehrm-forgot-password-button').contains('Cancel').should('exist')
    cy.get("button[type='submit']").contains('Reset Password').click()
  });

  it('should be able to login successfully', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get("button[type='submit']").contains('Login').click()
    cy.url().should('include', '/dashboard');
  });
});


  
