import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Dashboard from './components/Dashboard';
import { ballCount, strikeCount, setBallCount, setStrikeCount } from './App';

it('renders without crashing', () => {
  render(<App />);
});

test('Dashboard renders without crashing', () => {
  render(<Dashboard />);
});

test('contains Baseball Scoreboard header text', () => {
  const container = render(<App />);
  console.log(container);
  // Act - getting the node by text
  container.getByText(/Baseball Scoreboard/i);
});
