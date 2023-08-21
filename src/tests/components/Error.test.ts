import { ErrorBoundary } from '../../assets/js/components/Error';

describe('ErrorBoundary component', () => {

  // Mock the app container
  beforeAll(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  afterEach(() => {
    document.getElementById('app')!.innerHTML = '';
  });

  it('should render a specific error message when handleError is called with an Error instance', () => {
    const errorMessage = 'There was a problem with your request';
    ErrorBoundary.handleError(new Error(errorMessage));

    const errorText = document.querySelector('.poke-error h3');
    expect(errorText!.textContent).toBe(`(${errorMessage})`);
  });

  it('should render a generic error message when handleError is called with a non-Error instance', () => {
    ErrorBoundary.handleError('Some random string which is not an Error instance');

    const errorText = document.querySelector('.poke-error h3');
    expect(errorText!.textContent).toBe('(Generic error.)');
  });

  it('should render the correct error template', () => {
    const errorMessage = 'There was a problem with your request';
    ErrorBoundary.render(errorMessage);

    expect(document.querySelector('.poke-error h2')!.textContent).toBe('There was an error with your request.');
    expect(document.querySelector('.poke-error h3')!.textContent).toBe(`(${errorMessage})`);
    expect(document.querySelector('.poke-error img')!.getAttribute('src')).toBe('/images/sad-pikachu.png');
  });

  it('should not display specific error text in the template if no error text is provided', () => {
    ErrorBoundary.render();

    expect(document.querySelector('.poke-error h3')).toBeNull(); // Because no specific error text should be rendered in this case
  });

});