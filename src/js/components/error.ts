export const errorMessage =  { 
  template() {
    return `
      <div class="poke-error">
        <img width="200" height="200" src="/images/sad-pikachu.png" alt="Sad Pikachu">
        <h2>There was an error with your request.</h2>
        <p>Please try again in a few minutes.</p>
      </div>
    `;
  },
  render() {
    document.getElementById('app')!.innerHTML = errorMessage.template();
  },
};