describe('Contact List Suite', () => {

  it('Sign Up', () => {
    cy.log("User has to sign up");

    // Navigate to Contact List Site
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.log("Navigated to Contact List Site");

    // Click on the Sign Up button
    cy.get('button[id="signup"]').click();

    // Fill out the sign-up form
    cy.get('input[id="firstName"]').type('Ernest');
    cy.get('input[id="lastName"]').type('Jones');
    cy.get('input[id="email"]').type('ernest@mailinator.com');
    cy.get('input[id="password"]').type('20December!');

    // Submit the sign-up form
    cy.get('button[id="submit"]').click();
    cy.log("User has Successfully Signed Up");

    // Log out after signing up
    cy.get('button[id="logout"]').click();
    cy.wait(2000);
  });

  it('Login and Add Contact', () => {
    // Visit the Contact List Site
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

    // Log in with existing credentials
    cy.get('input[id="email"]').type('ernest@mailinator.com');
    cy.get('input[id="password"]').type('20December!');
    cy.get('button[id="submit"]').click();
    
    cy.log("User has Successfully Signed In");

    // Navigate to add a new contact
    cy.get('button[id="add-contact"]').click();
    cy.log('User wants to add a contact');

    // Fill out the contact form
    cy.get('input[id="firstName"]').type('Layton');
    cy.get('input[id="lastName"]').type('Green');
    cy.get('input[id="birthdate"]').type('1801-01-23');
    cy.get('input[id="email"]').type('green@mailinator.com');
    cy.get('input[id="phone"]').type('09020854654');
    
    // Address details
    cy.get('input[id="street1"]').type('Woji');
    cy.get('input[id="street2"]').type('Elejiji');
    cy.get('input[id="city"]').type('Port Harcourt');
    cy.get('input[id="stateProvince"]').type('Rivers');
    cy.get('input[id="postalCode"]').type('500102');
    
    // Country details
    cy.get('input[id="country"]').type('Nigeria');

    // Submit the contact form
    cy.get('button[id="submit"]').click();
    
    cy.log('User has Successfully Added a New Contact');

    //Adding another contact
    // Fill out the contact form
    cy.get('button[id="add-contact"]').click()
    cy.get('input[id="firstName"]').type('Sanusi');
    cy.get('input[id="lastName"]').type('Bayo');
    cy.get('input[id="birthdate"]').type('2005-01-13');
    cy.get('input[id="email"]').type('sanu@mailinator.com');
    cy.get('input[id="phone"]').type('09030895454');
    
    // Address details
    cy.get('input[id="street1"]').type('Ago');
    cy.get('input[id="street2"]').type('Sango');
    cy.get('input[id="city"]').type('Sango-Ota');
    cy.get('input[id="stateProvince"]').type('Lagos');
    cy.get('input[id="postalCode"]').type('500101');
    
    // Country details
    cy.get('input[id="country"]').type('Nigeria');

    // Submit the contact form and logout
    cy.get('button[id="submit"]').click();
    cy.get('button[id="logout"]').click()
  });

});