describe('Initial Load', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Pokémon grid after loading', () => {
    cy.get('.poke-grid').should('be.visible'); 
    cy.get('.poke-loader').should('not.exist');
  });
  
  it('should render Pokémon cards correctly and with the correct lenght', () => {
    cy.get('.poke-card').should('have.length', 100); 
    cy.get('.poke-card:first').should('contain.text', 'Bulbasaur'); 
  });
});
