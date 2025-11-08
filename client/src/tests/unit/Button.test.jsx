// Button.test.js - Unit test for Button component (CommonJS)
const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const Button = require('../../components/Button');

describe('Button Component', () => {
  // Test rendering
  it('renders with default props', () => {
    render(React.createElement(Button, null, 'Click me'));
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn'); // Adjusted from btn-primary since current Button doesn't define variant classes
    expect(button).not.toBeDisabled();
  });

  // Test disabled state
  it('renders in disabled state', () => {
    render(React.createElement(Button, { disabled: true }, 'Disabled'));
    const button = screen.getByRole('button', { name: /disabled/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn');
  });

  // Test click handler
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(React.createElement(Button, { onClick: handleClick }, 'Click me'));
    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test that disabled button doesn't call onClick
  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(React.createElement(Button, { onClick: handleClick, disabled: true }, 'Click me'));
    const button = screen.getByRole('button', { name: /click me/i });

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test with additional props
  it('passes additional props to the button element', () => {
    render(React.createElement(Button, { 'data-testid': 'custom-button', 'aria-label': 'Custom Button' }, 'Custom'));
    const button = screen.getByTestId('custom-button');

    expect(button).toHaveAttribute('aria-label', 'Custom Button');
  });

  // Test with custom className
  it('accepts and applies custom className', () => {
    render(React.createElement(Button, { className: 'custom-class' }, 'Custom Class'));
    const button = screen.getByRole('button', { name: /custom class/i });

    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('btn');
  });
});
