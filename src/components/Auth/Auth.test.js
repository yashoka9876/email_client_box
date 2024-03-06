import { fireEvent, render, screen, within } from "@testing-library/react"
import Auth from "./Auth"
import userEvent from "@testing-library/user-event"
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


//Here we will write for login component testing code.

test('testing hidden element',()=>{
    render(<Auth/>)

    const button=screen.queryByText('Login');
    expect(button).not.toBeInTheDocument();
})
test('testing hidden change mode',()=>{
    render(<Auth/>)

    const button=screen.queryByText('Go to SignUP');
    expect(button).not.toBeInTheDocument();
})

//This was my 8th text
test('toggleState function gets executed on button click', () => {
    // Render the component
     render(<Auth />);
  
    // Get the button element by its text content
    const toggleButton = screen.getByText('Go To Login');
  
    // Simulate a click on the button
    fireEvent.click(toggleButton);
  
    // Check if the state has changed accordingly
    const textElement = screen.getByText('Sign_IN');
    expect(textElement).toBeInTheDocument();
  });

  //Here i will use within funciton method to know weather it has nested element or not

  test('testing nested element in p tag',()=>{
    render(<Auth/>)
    const element=screen.getByText('Don\'t have an account?',{exact:false})
    const ele2=within(element).getByText('Sign up here');
    expect(ele2).toBeInTheDocument();
  })


  // Here we will write 10th testing code

//   test('testing within function',async()=>{
//     userEvent.setup();
//     render(<Auth/>);
//     const btn=screen.getByText('SignUP');
//     await userEvent.click(btn)
//     expect(screen.getByText('Welcome to the email box client')).toBeInTheDocument();
// })



  



  