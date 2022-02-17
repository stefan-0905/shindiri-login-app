import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Navigation from './Navigation';
import Cookies from 'js-cookie';
import { logout } from '../../api/Auth';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('navigation', () => {
  it('logout works', () => {
    Cookies.set('Authorization', 'test')
    const handleLogout = jest.fn(() => {
      logout()
    });
    const { getByTestId } = render(<Navigation handleLogout={handleLogout} />);

    const button = getByTestId('button-logout');

    fireEvent.click(button);

    expect(Cookies.get('Authorization')).toBe(undefined)

  });

});

