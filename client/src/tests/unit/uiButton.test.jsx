import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';
import '@testing-library/jest-dom';

test('renders shadcn ui button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});
