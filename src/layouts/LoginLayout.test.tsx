import React from 'react';
import { render } from '@testing-library/react';

import LoginLayout from './LoginLayout';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('login form display', () => {
  it('layout renders', () => {
    const attemptLogin = jest.fn();
    render(<LoginLayout attemptLogin={attemptLogin} />);
  });

  it('layout renders form', () => {
    const attemptLogin = jest.fn();
    const { getByTestId } = render(<LoginLayout attemptLogin={attemptLogin} />);

    expect(getByTestId('username-input')).toHaveTextContent('');
    expect(getByTestId('password-input')).toHaveTextContent('');
    expect(getByTestId('button-submit')).toBeTruthy();

  });
});

