import type { AccountLogin } from '../interface/user/login';
import type { Dispatch } from '@reduxjs/toolkit';

import { message } from 'antd';

import { setUserItem } from './user.store';
import { createAsyncAction } from './utils';

export const loginAsync = createAsyncAction<AccountLogin, boolean>(payload => {
  return async dispatch => {
    try {
      dispatch(
        setUserItem({
          logged: true,
          email: '',
        }),
      );
      console.log(payload);

      return true;
    } catch (error: any) {
      message.error('Login fail');

      return false;
    }
  };
});

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(
        setUserItem({
          logged: false,
          email: '',
        }),
      );
      localStorage.clear();

      return true;
    } catch (error) {
      message.error('Logout fail');

      return false;
    }
  };
};
