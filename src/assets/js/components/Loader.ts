/**
 * A component used to display a loading animation in the application.
 * @public
 */
export const Loader = {
  /**
   * Generates the HTML markup for the loading animation.
   * 
   * @returns - A string representation of the loader's HTML markup.
  */
  render() {
    return (
      `<div class="poke-loader">
        <div class="poke-loader__icon"></div>
        <p class="poke-loader__text">Loading Pokedex...</p>
      </div>`
    );
  },
};