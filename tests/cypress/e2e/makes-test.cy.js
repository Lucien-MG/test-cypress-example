describe('Coverage', () => {
  it('Get Token', () => {
    cy.request({
      method: 'POST',
      url: 'https://connect.integration.munic.io/api/v2/external_services/sessions', // baseUrl is prepend to URL
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        "data": {
          "type": "sessions",
          "attributes": {
            "token": Cypress.env('admin_token') // ext:fee23ad5-03b3-4b25-9394-b2c149cc1a96
          }
        }
      },
    }).its('body').then((body) => {
      const req_data = body.data;
      Cypress.env('token', req_data["attributes"]["token"])
    })
  })

  it('Get Vehicle', () => {
    const token = Cypress.env('token');
    const authorization = `Bearer ${ token }`;
  
    cy.request({
      method: 'GET',
      url: '/v1/makes/', // baseUrl is prepend to URL
      form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      headers: {
        authorization,
      }
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).has.property("data"); 
    })
  })
})
