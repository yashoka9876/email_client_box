import React from 'react';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { renderWithProviders } from '../../utils/utils-for-tests';
import EventDetailPage from './EmailDetail';

describe('EventDetailPage component', () => {
  test('renders "Loading..." while fetching data', async () => {
    renderWithProviders(<EventDetailPage/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
  });

  test('renders event details when data is fetched successfully', async () => {
    renderWithProviders(<EventDetailPage/>)
    let a=await screen.findByTestId('hello')
    expect(a).toBeInTheDocument();
    // expect(screen.getByText('subject: Test Subject')).toBeInTheDocument();
    // expect(screen.getByText('Time: 2024-03-19')).toBeInTheDocument();
    // expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  test('handles event not found', async () => {
    // Mock API response for event not found
    renderWithProviders(<EventDetailPage/>)

  });

  
});
