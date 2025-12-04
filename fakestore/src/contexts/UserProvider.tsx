import { useReducer, useState, type PropsWithChildren } from "react";
import {
  userInitialState,
  type UserAction,
  type UserState,
} from "../utils/type";
import { UserContext } from "./UserContext";
import { api } from "../api/api";

export const UserProvider = ({ children }: PropsWithChildren) => {

  const [user, setUser] = useState(null)
  const reducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          ...state,
          payload: action.payload,
        };
      }
      default:
        return state;
    }
  };
  //!Login
  const login = async () => {
    try {
      const response = await api.post("/auth/user", {
        username: state.user.username,
        password: state.user.password,
      });
      dispatch({
        type: "LOGIN",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [state, dispatch] = useReducer(reducer, userInitialState);
  return (
    <UserContext.Provider value={{ state, user, setUser, login, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
