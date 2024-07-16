describe('Dashboard page', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.url().should('include', '/login');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get("button[type='submit']").contains('Login').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('Should Navigate to the Dashboard page', () => {
      cy.get('.oxd-topbar-header-title').contains('Dashboard');
    });
  
    it('Should display user profile', () => {
      cy.get('.oxd-userdropdown-tab').should('exist')
        .within(() => {
          cy.get('img').should('exist');
        });
    });
  
    it('Should display a list of options when you click on the profile', () => {
      cy.get('.oxd-userdropdown-tab').should('exist').click();
      cy.get('.oxd-dropdown-menu').should('exist').within(() => {
        const expectedOptions = ['About', 'Support', 'Change Password', 'Logout'];
        cy.get('li').should('have.length', 4)
          .each(($el, index) => {
            cy.wrap($el).should('have.text', expectedOptions[index]);
          });
      });
    });
  
    it('Should display Time at work card', () => {
      cy.get(':nth-child(1) > .oxd-sheet').within(() => {
        cy.get('.employee-image').should('exist');
        cy.get('.emp-attendance-chart').should('exist');
        cy.get('p').contains('Punched Out').should('exist');
        cy.get('.oxd-icon.bi-stopwatch').should('exist');
      });
    });
    it('Should display my Actions', () => {
      cy.get(':nth-child(2) > .oxd-sheet').within(() => {
          cy.get('i').should('exist');
          cy.get('orangehrm-report-icon').should('exist');
          cy.get('p').contains('My Actions').should('exist');
          cy.get('p').contains('Pending Self Review').should('exist');
          cy.get('p').contains('Candidate to Interview').should('exist');
    
        });
      });
      it('Should display Quick Launch', () => {
        cy.get(':nth-child(3) > .oxd-sheet').within(() => {
            cy.get('.oxd-icon').should('exist');
            cy.get('.oxd-icon').should('exist');
            cy.get('p').contains('Assign Leave').should('exist');
            cy.get('p').contains('Leave List').should('exist');
            cy.get('p').contains('Timesheets').should('exist');
      
          });
        });
        it('Should display Buzz Latest Posts', () => {
          cy.get(':nth-child(4) > .oxd-sheet').within(() => {
              cy.get('.orangehrm-buzz-widget-header').should('exist');
              cy.scrollTo('bottom')
        
            });
          });
          it('Employees on Leave Today', () => {
            cy.get(':nth-child(5) > .oxd-sheet')
            });
        it('Employee Distribution by Sub Unit', () => {
          cy.get(':nth-child(6) > .oxd-sheet').within(() => {
              cy.get('.oxd-pie-chart').should('exist');

            });
          });
        it('Employee Distribution by Sub Unit', () => {
          cy.get(':nth-child(7) > .oxd-sheet').within(() => {
              cy.get('.oxd-pie-chart').should('exist');
              
        
            });
          });
  });
  