import React from 'react';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

import Dashboard from './components/Dashboard';
import { ballCount, strikeCount, setBallCount, setStrikeCount } from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Dashboard renders without crashing', () => {
  render(<Dashboard />);
})

test('contains Lions and Tigers scoreboards', () => {
  // Arrange
  const container = render(<App />);
  console.log(container);
  // Act - getting the node by text
  container.getByText(/Baseball Scoreboard/i);
});
