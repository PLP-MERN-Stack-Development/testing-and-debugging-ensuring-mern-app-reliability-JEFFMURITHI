const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const useCounter = require('../../hooks/useCounter');

function CounterTestComp() {
  const { count, inc, dec, reset } = useCounter(2);
  return React.createElement('div', null,
    React.createElement('span', { 'data-testid': 'count' }, String(count)),
    React.createElement('button', { onClick: inc }, 'inc'),
    React.createElement('button', { onClick: dec }, 'dec'),
    React.createElement('button', { onClick: reset }, 'reset'),
  );
}

describe('useCounter hook', () => {
  it('increments, decrements, resets correctly', () => {
    render(React.createElement(CounterTestComp));
    const count = screen.getByTestId('count');
    const [incBtn, decBtn, resetBtn] = screen.getAllByRole('button');
    expect(count).toHaveTextContent('2');
    fireEvent.click(incBtn);
    expect(count).toHaveTextContent('3');
    fireEvent.click(decBtn);
    expect(count).toHaveTextContent('2');
    fireEvent.click(resetBtn);
    expect(count).toHaveTextContent('2');
  });
});
