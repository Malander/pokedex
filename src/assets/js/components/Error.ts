/**
 * A component to handle and display errors in the application.
*/
export const ErrorBoundary =  { 
  /**
   * Handles the given error and displays an appropriate message to the user.
   * 
   * @param error - The error object to handle.
  */
  handleError(error: unknown): void {
    if (error instanceof Error) {
      ErrorBoundary.render(error.message);
    } else {
      ErrorBoundary.render('Generic error.');
    }
  },
  /**
   * Creates an HTML template to display the error message.
   * 
   * @param errorText - Optional error text to be displayed.
   * @returns - A string representation of the error's HTML markup.
  */
  template(errorText?: string) {
    return (
      `<div class="poke-error">
        <img width="200" height="200" src="/images/sad-pikachu.png" alt="Sad Pikachu">
        <h2>There was an error with your request.</h2>
        ${errorText ? `<h3>(${errorText})</h3>` : ''}
        <p>Please try again in a few minutes.</p>
      </div>`
    )
  },
  /**
   * Renders the error message on the page.
   * 
   * @param errorText - Optional error text to be displayed.
  */
  render(errorText?: string) {
    document.getElementById('app')!.innerHTML = ErrorBoundary.template(errorText);
  },
};