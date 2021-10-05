/// <reference types="Cypress" />

describe('test to verify input ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('fill input', () => {
    cy.get('.qa-input1')
      .type('asdkfagksfhak')
      .should('have.value', '');
  });
  it('fill input negative', () => {
    cy.get('.qa-input2')
      .type('-102')
      .should('exist', 'v-messages__message');
  });
  it.apply('fill with api', () => {});
});
