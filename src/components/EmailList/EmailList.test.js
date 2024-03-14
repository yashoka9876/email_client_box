import React from 'react';
import { screen } from '@testing-library/react';
import EmailList from './EmailList';
import { renderWithProviders } from '../../utils/utils-for-tests';

test('renders EmailList component', () => {
  renderWithProviders(<EmailList />);
});

