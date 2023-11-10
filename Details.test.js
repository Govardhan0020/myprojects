import { render, screen } from '@testing-library/react';
import Details from './Details';

test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByText(/First Name :/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByText(/Last Name : /i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByText(/Email ID :/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByText(/Designation : /i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByText(/Office location  : /i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<Details />);
    const linkElement = screen.getByText(/Address : /i);
    expect(linkElement).toBeInTheDocument();
  });