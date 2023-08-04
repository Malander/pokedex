import '../scss/main.scss';
import { App } from './app';
import { errorMessage } from './components/error';

const renderApp = App();

try {
  await renderApp.init();
} catch (error) {
  errorMessage.render();
}
