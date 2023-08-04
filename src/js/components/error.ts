export const errorMessage =  { 
  template: () => {
    return `
      <div class="poke-error">
        <img width="200" height="200" src="/images/sad-pikachu.png" alt="Sad Pikachu">
        <h2>Si è verificato un errore.</h2>
        <p>Ti preghiamo di riprovare più tardi.</p>
      </div>
    `;
  },
  render: (): void => {
    debugger;
    document.getElementById('app')!.innerHTML = errorMessage.template();
  },
};