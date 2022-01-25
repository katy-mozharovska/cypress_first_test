//<reference types="cypress" />

describe('Your Second Test', () => {
  let user;

  before(function () {
    cy.task("freshUser").then((freshUser) => {
        user = freshUser;
    });
  });

  it('Sign up with faker', () => {
    cy.visit('https://react-redux.realworld.io/#/register?_k=luy0fu');
    cy.get(':nth-child(1) > .form-control').type(user.username).should('have.value', user.username);
    cy.get(':nth-child(2) > .form-control').type(user.email).should('have.value', user.email);
    cy.get(':nth-child(3) > .form-control').type(user.password).should('have.value', user.password);
    cy.get('.btn').click();
    
    cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
  })
})
