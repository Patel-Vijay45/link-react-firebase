import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  signOutGoogle,
  auth,
} from "../utils/firebase/firebase.utils";

const initialState = {
  isAuthenticated: false,
  isInitialised: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated } = action.payload;
      console.log("init " + isAuthenticated);

      return {
        ...state,
        isAuthenticated,
      };
    }
    case "LOGIN": {
      console.log("login ");

      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case "LOGOUT": {
      console.log("logout ");
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    default: {
      console.log("default");
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
    console.log(user);

    dispatch({
      type: "LOGIN",
    });
  };

  const logout = () => {
    console.log("logout set session call");
    signOutGoogle();
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: true,
          },
        });
      } else {
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
          },
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
