import React from 'react';
import { render } from '@testing-library/react';

import LoginLayout from './Login';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('login form display', () => {
  it('layout renders', () => {
    const attemptLogin = jest.fn();
    render(<LoginLayout handleLogin={attemptLogin} />);
  });

  it('layout renders form', () => {
    const attemptLogin = jest.fn();
    const { getByTestId } = render(<LoginLayout handleLogin={attemptLogin} />);

    expect(getByTestId('username-input')).toHaveTextContent('');
    expect(getByTestId('password-input')).toHaveTextContent('');
    expect(getByTestId('button-submit')).toBeTruthy();

  });
});

