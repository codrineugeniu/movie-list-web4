import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const wrapper  = render(<App />);
  const linkElement = wrapper.getByText(/Hello stranger/i)
  expect(linkElement).toBeInTheDocument();
  expect(wrapper.toJSON()).toMatchSnapshot()
  // expect(true).toEqual(true)
});
