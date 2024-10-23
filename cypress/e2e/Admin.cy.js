describe('Dashboard page', () => {
  beforeEach(() => {
  
    cy.login();
  });
  
    it('Should Navigate to the Admin page', () => {
      cy.get('.oxd-main-menu-item--name').contains('Admin').click()
      cy.url().should('include', '/admin/viewSystemUsers');
      cy.get('.oxd-topbar-header-title').contains('User Management');
    });
  
    it('Should be able to serach a system User', () => {
        cy.get('.oxd-main-menu-item--name').contains('Admin').click()
        cy.url().should('include', '/admin/viewSystemUsers');
        cy.get('input[name="username"]').type('test123');
        cy.get("button[type='submit']").contains('Search').click();
    });
  
    it('Should be able to add a new system user', () => {
      cy.get('.oxd-button--medium ').Contains('Add').click();
      cy.get('.oxd-select-text-input').click();
      cy.wait(3000)
      cy.get('.oxd-select-text') 
        .find('option:nth-child(2)')    
        .click();
      cy.get('.oxd-autocomplete-text-input ').type('Orange Test');  
      cy.get('input[name="username"]').type('Adminadmin');
      cy.get('input[name="password"]').type('admin123');
      cy.get("button[type='submit']").contains('Save').click();

      
      });
      it('Should Navigate to the Admin page', () => {
        cy.get('.oxd-table').within(() => {
          cy.contains('th', 'Username').should('exist');
          cy.contains('th', 'User Role').should('exist');
          cy.contains('th', 'Employee Name').should('exist');
          cy.contains('th', 'Status').should('exist');
          cy.contains('th', 'Actions').should('exist');
      });
      });
    

     
    });

  
