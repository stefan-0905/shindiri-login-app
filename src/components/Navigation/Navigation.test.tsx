import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Navigation from './Navigation';
import Auth from '../../api/Auth';
import Cookies from 'js-cookie';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('navigation', () => {
  it('logout works', () => {
    Cookies.set('Authorization', 'test')
    const attemptLogout = jest.fn(() => {
      Auth.logout()
    });
    const { getByTestId } = render(<Navigation attemptLogout={attemptLogout} />);

    const button = getByTestId('button-logout');

    fireEvent.click(button);

    expect(Cookies.get('Authorization')).toBe(undefined)

  });

});

