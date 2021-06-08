import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../components/App';

describe('renders Navbar', () => {
  test('has link to Home', () => {
    render(<App />);
    const el = screen.getByText(/Home/i);
    expect(el).toBeInTheDocument();
  });
  test('has link to Calculator', () => {
    render(<App />);
    const el = screen.getByText(/Calculator/i);
    expect(el).toBeInTheDocument();
  });
  test('has link to Quote', () => {
    render(<App />);
    const el = screen.getByText(/Quote/i);
    expect(el).toBeInTheDocument();
  });
});
