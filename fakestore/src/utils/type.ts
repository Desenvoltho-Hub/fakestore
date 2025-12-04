

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
export interface Token{
  token: string  
}
export const loginInitialState: LoginForm = {
  username: '',
  password: ''
} 
export interface UserContextType {
  state: UserState,
  login: () => LoginForm | null
  dispatch: React.Dispatch<UserAction>
 
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

