import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Welcome component when idToken is not null', () => {
    render(<Home />);
  });