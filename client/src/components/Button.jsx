const React = require('react');

function Button({ children, onClick, disabled, className = '', ...rest }) {
  return React.createElement(
    'button',
    {
      onClick,
      disabled,
      type: 'button',
      className: `btn px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 ${className}`,
      'data-testid': rest['data-testid'] || 'button', // ✅ allow override
      ...rest, // spread remaining props
    },
    children
  );
}

module.exports = Button;
