import { fireEvent, render, screen } from "@testing-library/react"
import Auth from "./Auth"
//this one is first test
test('render auth component without crashing',()=>{
    render(<Auth/>)
})
//this one is second test
test('render email input feild',()=>{
    render(<Auth/>)
    const a=screen.getByPlaceholderText('Enter email');
    expect(a).toBeInTheDocument();
})

//here we will write third test

test('render password input feild',()=>{
    render(<Auth/>)
    const a=screen.getByPlaceholderText('Password');
    expect(a).toBeInTheDocument();
})

//here we will test clicking button

test('switches mode from login to signup', () => {
    // Render the component
    render(<Auth />);
    
    // Find the button element for switching to signup mode
    const switchToSignupButton = screen.getByText('Go To Login');
    
    // Click the button to switch modes
    fireEvent.click(switchToSignupButton);
  
    // Assert that the text indicating signup mode is present
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  //This one is fifthe testing here

  test('switches mode from signup to Login', () => {
    // Render the component
    render(<Auth />);

    const switchToSignupButton = screen.getByText('Go To Login');
    // Find the button element for switching to signup mode
    fireEvent.click(switchToSignupButton);

     expect(screen.getByText('Go To SignUP')).toBeInTheDocument();
    
    // Click the button to switch modes
  
    // Assert that the text indicating signup mode is present
     expect(screen.getByText('Sign_IN')).toBeInTheDocument();
  });






  