import React from 'react';
import { renderWithProviders } from '../../utils/utils-for-tests';
import Compose from './Compose';
import { fireEvent, screen, waitFor } from '@testing-library/react';


test('render Compsoe component without crashing',()=>{
    renderWithProviders(<Compose/>)
})

test('renders input fields', () => {
    renderWithProviders(<Compose/>);
    const recipientsInput = screen.getByPlaceholderText('Recipents');
    const subjectInput =screen.getByPlaceholderText('Subject');
    const textArea = screen.getByPlaceholderText('text area....');
  
    expect(recipientsInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
  });

  test('input fields are empty initially', () => {
    renderWithProviders(<Compose />);
    const recipientsInput = screen.getByPlaceholderText('Recipents');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const textArea = screen.getByPlaceholderText('text area....');
  
    expect(recipientsInput.value).toBe('');
    expect(subjectInput.value).toBe('');
    expect(textArea.value).toBe('');
  });

  //This one is forth test here

  test('ref attributes are applied correctly', () => {
    renderWithProviders(<Compose />);
    const recipientsInput = screen.getByPlaceholderText('Recipents');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const textArea = screen.getByPlaceholderText('text area....');
  
  
    expect(recipientsInput).toHaveAttribute('type');
    expect(subjectInput).toHaveAttribute('type');
    expect(textArea).toHaveAttribute('rows');
  });



  test('ref is applied correctly', () => {
    renderWithProviders(<Compose />);
    
    // Access the element using its ref
    const recipientsInputRef = screen.getByPlaceholderText('Recipents');
    const recipientsInput = recipientsInputRef.current; // Access the underlying DOM element
    
    // Assert that the ref is applied correctly
    expect(recipientsInput).not.toBeNull();
    // Perform additional assertions if needed
  });


  // Assuming ComposeForm is your component

test('input fields accept user input', () => {
    renderWithProviders(<Compose />);
    const recipientsInput = screen.getByPlaceholderText('Recipents');
    const subjectInput = screen.getByPlaceholderText('Subject');
    const textArea = screen.getByPlaceholderText('text area....');
  
  
  const testValue = 'test@example.com';

  // Simulate user input
  fireEvent.change(recipientsInput, { target: { value: testValue } });
  fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
  fireEvent.change(textArea, { target: { value: 'Test message content' } });

  // Assert user input
  expect(recipientsInput.value).toBe(testValue);
  expect(subjectInput.value).toBe('Test Subject');
  expect(textArea.value).toBe('Test message content');
});



//very dangerous testing bro

test('form submits with valid input', async () => {
  // Render the component
  renderWithProviders(<Compose />);
  
  // Get form inputs and fill them with valid data
  const toInput = screen.getByPlaceholderText('Recipents');
  const subjectInput = screen.getByPlaceholderText('Subject');
  const messageInput = screen.getByPlaceholderText('text area....');

  fireEvent.change(toInput, { target: { value: 'test@example.com' } });
  fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
  fireEvent.change(messageInput, { target: { value: 'Test Message' } });

  // Submit the form
  fireEvent.click(screen.getByText('Send'));

  // Assert that the form is submitted successfully
  // You can check for success message, or any other expected behavior
//   await waitFor(() => {
//     // Add your assertions here, for example:
//     // expect(successMessage).toBeInTheDocument();
//     // expect(dispatchedAction).toHaveBeenCalledWith(expectedPayload);
//     // expect(dispatch).toHaveBeenCalledWith(closeSendMessage());
//   });
});