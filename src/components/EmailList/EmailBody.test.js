import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/utils-for-tests";
import EmailBody from "./EmailBody";

test('renders email body with correct props', () => {
    const props = {
      name: 'John Doe',
      subject: 'Test Subject',
      message: 'Test Message',
      time: '2024-03-09 10:30',
    };
  
    renderWithProviders(<EmailBody {...props} />);
  
    const nameElement = screen.getByText(props.name);
    const subjectElement = screen.getByText(props.subject);
    const timeElement = screen.getByText(props.time);
  
    expect(nameElement).toBeInTheDocument();
    expect(subjectElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
  });

  test('renders email body with checkbox, star, and label icons', () => {
    const props = {
      name: 'John Doe',
      subject: 'Test Subject',
      message: 'Test Message',
      time: '2024-03-09 10:30',
    };
  
    renderWithProviders(<EmailBody {...props} />);
  
    const checkboxIcon = screen.getByTestId('CheckBoxOutlineBlankIcon');
    const starIcon = screen.getByTestId('StarBorderIcon');
    const labelIcon = screen.getByTestId('LabelIcon');
  
    expect(checkboxIcon).toBeInTheDocument();
    expect(starIcon).toBeInTheDocument();
    expect(labelIcon).toBeInTheDocument();
  });



  test('renders email body with correct CSS classes', () => {
    const props = {
      name: 'John Doe',
      subject: 'Test Subject',
      message: 'Test Message',
      time: '2024-03-09 10:30',
    };
  
    renderWithProviders(<EmailBody {...props} />);
  
    const leftDivElement = screen.getByTestId('emailbody__left');
    const middleDivElement = screen.getByTestId('emailbody__middle');
    const rightDivElement =  screen.getByTestId('emailbody__right');
    
  
    expect(leftDivElement).toBeInTheDocument();
    expect(leftDivElement).toHaveClass('emailbody__left');
    expect(middleDivElement).toBeInTheDocument();
    expect(middleDivElement).toHaveClass('emailbody__middle');
    expect(rightDivElement).toBeInTheDocument();
    expect(rightDivElement).toHaveClass('emailbody__right');
  });

  test('renders correct content', () => {
    const props = {
      name: 'John Doe',
      subject: 'Test Subject',
      message: 'Test Message',
      time: '2024-03-09 10:30',
    };
  
    renderWithProviders(<EmailBody {...props} />);
  
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Test Message',{exact:false})).toBeInTheDocument();
    expect(screen.getByText('2024-03-09 10:30')).toBeInTheDocument();
  });

  
