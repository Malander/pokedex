export const ErrorBoundary =  { 
  handleError(error: unknown): void {
    if (error instanceof Error) {
      ErrorBoundary.render(error.message);
    } else {
      ErrorBoundary.render('An error occurred.');
    }
  },
  template(errorText?: string) {
    debugger;
    return `
      <div class="poke-error">
        <img width="200" height="200" src="/images/sad-pikachu.png" alt="Sad Pikachu">
        <h2>There was an error with your request.</h2>
        ${errorText ? `<h3>(${errorText})</h3>` : ''}
        <p>Please try again in a few minutes.</p>
      </div>
    `;
  },
  render(errorText?: string) {
    document.getElementById('app')!.innerHTML = ErrorBoundary.template(errorText);
  },
};