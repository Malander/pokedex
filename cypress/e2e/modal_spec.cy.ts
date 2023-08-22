describe('Modal Component', () => {
  it('should display the modal with correct data and dismiss it at close click', () => {
    cy.visit('http://localhost:5173/');

    cy.get('.poke-card').first().should('have.attr', 'data-id').and('not.be.empty');
    cy.get('.poke-card').first().click();

    cy.get('.poke-modal').should('be.visible');

    cy.get('.poke-modal__name').should('not.be.empty');
    cy.get('.poke-modal__image').should('be.visible');
    cy.get('.poke-stat').should('have.length', 6);

    // Close the modal
    cy.get('.poke-modal__close').click();
    cy.get('.poke-modal').should('not.exist');
  });
});