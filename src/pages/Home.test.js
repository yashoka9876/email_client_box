import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { renderWithProviders } from '../utils/utils-for-tests';

test('renders Welcome component when idToken is not null', () => {
    renderWithProviders(<Home />);
  });