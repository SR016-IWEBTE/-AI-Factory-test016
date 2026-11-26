import { test, expect } from 'node:test';
import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../src/pages/HomePage.js';

// Added file extension .jsx to render properly
const jsxHomePage = () => <HomePage />;

test('renders company logo, mission statement, and offerings', () => {
  const { getByText } = render(jsxHomePage());
  expect(getByText(/Our Mission/i)).toBeInTheDocument();
  expect(getByText(/To provide the best services in the industry./i)).toBeInTheDocument();
  expect(getByText(/Our Offerings/i)).toBeInTheDocument();
  expect(getByText(/Service A/i)).toBeInTheDocument();
  expect(getByText(/Service B/i)).toBeInTheDocument();
  expect(getByText(/Service C/i)).toBeInTheDocument();
});