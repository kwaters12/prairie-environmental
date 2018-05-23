import { AsyncStorage } from 'react-native';

import { Actions } from 'react-native-router-flux';

const API_URL = 'http://localhost:3000';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SET_AUTHENTICATED_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const checkForAuthenticatedUser = () => {
  return (dispatch) => {
    return AsyncStorage.getItem('@PESStore:user')
      .then((response) => {
        const { data, id_token, expiry, client } = JSON.parse(response);
        let user = data;

        user.id_token = id_token;
        user.expiry = expiry;
        user.client = client;

        return dispatch(setAuthenticatedUser(user));
      }).catch(err => console.log("Error: ", err))
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    let config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: email,
          password: password,
      })
    };

    return fetch(`${API_URL}/auth/sign_in`, config)
      .then(response =>
        response.json().then(user => ({ user, response }))
      ).then(({ user, response }) => {
        user.id_token = response.headers.get('access-token');
        user.expiry = response.headers.get('expiry');
        user.client = response.headers.get('client');

        if (!response.ok) {
          dispatch(loginUserFail(user.message))
          return Promise.reject(user)
        } else {
          const storedUser = JSON.stringify(user);

          AsyncStorage.setItem('@PESStore:user', storedUser);
          return dispatch(loginUserSuccess(user));
        }
      }).catch(err => console.log("Error: ", err))
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};


const setAuthenticatedUser = (user) => {
 return {
    type: SET_AUTHENTICATED_USER,
    payload: user
  };
}