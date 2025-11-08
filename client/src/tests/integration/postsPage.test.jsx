import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { setupWorker } from 'msw/browser';

import { handlers } from './apiHandlers';
import '@testing-library/jest-dom';
import PostsPage from '../../pages/PostsPage';

const server = setupWorker(...handlers);

beforeAll(() => server.start());
afterEach(() => server.resetHandlers());
afterAll(() => server.stop());

test('loads and displays posts from API', async () => {
  render(<PostsPage />);
  expect(await screen.findByText(/mock post/i)).toBeInTheDocument();
});
