import type { Dispatch, SetStateAction } from "react"

export interface User {
  id: number,
  email: string,
  password: string,
  username: string
  name: {
    firstname: string,
    lastname: string
  }
}
export const userInitialState: UserState = {
  user: {
     id: 0,
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: ''
  } 
  }

}
export interface UserState {
  user: User
}
export type UserAction = {
  type: "LOGIN",
  payload: User
}
export interface UserContextType {
  state: UserState,
  login: () => void
  dispatch: React.Dispatch<UserAction>
  user: null
  setUser: Dispatch<SetStateAction<null>>
}
export interface LoginForm {
  username: string,
  password: string
}
//!Carrinho
export interface Carrinho {
  id: number,
  userId: number,
  products: []
}

