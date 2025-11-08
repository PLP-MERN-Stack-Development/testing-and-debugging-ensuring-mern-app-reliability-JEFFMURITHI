const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom');
const App = require('./App').default || require('./App');


test('renders main heading', () => {
  render(React.createElement(App));
  expect(screen.getByText(/mern testing project/i)).toBeInTheDocument();
});
