import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByText(/CRUD APP/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("firstname");
    expect(linkElement).toBeInTheDocument();
  });
  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("lastname");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("email");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("design");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("location");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("address");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("submit");
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<FormPage />);
    const linkElement = screen.getByTestId("showuser");
    expect(linkElement).toBeInTheDocument();
  });

