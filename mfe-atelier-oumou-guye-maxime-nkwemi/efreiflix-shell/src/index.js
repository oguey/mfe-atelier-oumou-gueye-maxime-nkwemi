import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

// If running in a micro frontend context, expose the render function
if (module && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}