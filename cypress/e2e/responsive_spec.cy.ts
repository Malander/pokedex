describe('Responsiveness', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/');
    cy.get('.poke-card').first().should('have.attr', 'data-id').and('not.be.empty');
    cy.get('.poke-card').first().click();
  });

  it('Modal frame should occupy the full width and height of the viewport in mobile view', () => {
    // This values are equal to viewport ihopne-6, so we are basically testing that Modal is full width and full height in mobile.
    cy.get('.poke-modal__frame')
      .should('have.css', 'width', '375px')
      .and('have.css', 'height', '667px');
  });
});