"use client";
import React, { useCallback, useReducer } from "react";

enum AuthActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface AuthState {
  user: any;
  initialized: boolean;
  isLoggedIn: boolean;
}
type AuthAction = {
  type: AuthActionType;
  payload: Pick<AuthState, "user">;
};

const initialValue: AuthState = {
  user: null,
  initialized: false,
  isLoggedIn: false,
};

const initialContextValue = {
  ...initialValue,
  loginUser: (user: any) => {},
  logOutUser: () => {},
};

export const AuthContext = React.createContext(initialContextValue);

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        initialized: true,
        isLoggedIn: true,
      };
    case AuthActionType.LOGOUT:
      return {
        ...state,
        user: null,
        initialized: true,
        isLoggedIn: false,
      };
    default:
      return initialValue;
  }
};

export const AuthContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const loginUser = useCallback(
    (user: any) => {
      dispatch({ type: AuthActionType.LOGIN, payload: { user } });
    },
    [dispatch]
  );

  const logOutUser = useCallback(() => {
    dispatch({ type: AuthActionType.LOGOUT, payload: { user: null } });
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
