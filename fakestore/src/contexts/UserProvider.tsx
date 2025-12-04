import { useReducer, type PropsWithChildren } from "react";
import {
  userInitialState,
  type LoginForm,
  type UserAction,
  type UserState,
} from "../utils/type";
import { UserContext } from "./UserContext";
import { api } from "../api/api";

export const UserProvider = ({ children }: PropsWithChildren) => {
  const reducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          ...state,
          user: action.user,
        };
      }
      case "CADASTRO": {
        return {
            ...state,
            payload: action.payload,
            localStorage: action.localStorage
        }
    }
    }
};
const [state, dispatch] = useReducer(reducer, userInitialState);
  //=======================================================================================
  //!<login>
  //=======================================================================================
const login = async (data: LoginForm | null)  =>  {
    try {
        const response = await api.post('/auth/login', {
            username: data?.username,
            password: data?.password
        })
        alert('Login efetuado com sucesso!')
        dispatch({
            type: "LOGIN",
            user: response.data
        })
        dispatch({
            type: "CADASTRO",
            payload: response.data,
            localStorage: localStorage.setItem('userAuth', response.data.token)
        })
    } catch(err) {
        alert('deu ruim!')
        console.log(err)
    }
}

  return (
    <UserContext.Provider value={{ state, dispatch, login }}>
      {children}
    </UserContext.Provider>
  );
};
