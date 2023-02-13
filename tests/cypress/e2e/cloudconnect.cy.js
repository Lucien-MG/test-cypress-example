describe('Coverage', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Should be able to login', () => {
    cy.visit('https://presalesinte.integration.cloudconnect.io')
    cy.contains('Munic.Connect').click()

    cy.origin('https://connect.munic.io', () => {
      cy.get('#user_login').type(Cypress.env('user'))
      cy.get('#user_password').type(Cypress.env('password'))

      cy.get('.btn-primary').click()
    })
  
    cy.get('.navbar-inner > .container-fluid').should('be.visible');
  })


})
