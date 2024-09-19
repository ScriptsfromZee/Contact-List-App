describe('Contact List Suite', () => {

  it('Sign Up', () => {

    cy.log("User has to sign up");

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')

    cy.log("Navigated to Contact List Site");

    cy.get('button[id="signup"]').click()

    cy.get('input[id="firstName"]').type('Ernest')

    cy.get('input[id="lastName"]').type('Jones')

    cy.get('input[id="email"]').type('dee@mailinator.com')

    cy.get('input[id="password"]').type('20December!')
  
    cy.get('button[id="submit"]').click()

    cy.log("User has Succesfully Signed Up");

    cy.get('button[id="logout"]').click()

    cy.wait(2000);
  })

    it('Login', () => {
  
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    
    cy.get('input[id="email"]').type('dee@mailinator.com')

    cy.get('input[id="password"]').type('20December!')

    cy.get('button[id="submit"]').click()

    cy.log("User has Suceesfully Signed in")
  
    cy.get('button[id="add-contact"]').click()

    cy.log('User wants to ad a contact')

    cy.get('input[id="firstName"]').type('David')

    cy.get('input[id="lastName"]').type('Green')

    cy.get('input[id="birthdate"]').type('2001-01-23')

    cy.get('input[id="email"]').type('david@mailinator.com')

    cy.get('input[id="phone"]').type('09020897654')

    cy.get('input[id="street1"]').type('Woji')

    cy.get('input[id="street2"]').type('Elejiji')

    cy.get('input[id="city"]').type('Port Harcourt')

    cy.get('input[id="stateProvince"]').type('Rivers')

    cy.get('input[id="postalCode"]').type('500102')

    cy.get('input[id="country"]').type('Nigeria')

    cy.get('button[id="submit"]').click();

    cy.log('User has Succesfully added a new Contact')

  })

}) 
 
