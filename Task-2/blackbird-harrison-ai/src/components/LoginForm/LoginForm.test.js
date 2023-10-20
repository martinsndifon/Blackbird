import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './index';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText('Sign in');
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

describe('LoginForm', () => {
  it('should display successful login message for valid input', () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'P@ssw0rd' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Login Successful')).toBeInTheDocument();
  });

  it('should display an error message for an invalid email', () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'P@ssw0rd' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('should display an error message for an invalid password', () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalid password')).toBeInTheDocument();
  });
});
