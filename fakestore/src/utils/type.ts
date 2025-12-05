


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
  },
  cadastro: {
    email: '',
    password: '',
    username: ''
  }

}
export interface UserState {
  user: User
  cadastro: CadastroForm
}
export type UserAction = {
  type: "LOGIN",
  user: User
} | {
  type: "CADASTRO",
  payload: CadastroForm
  localStorage: void
} | {
  type: "CADASTRO_FAKE",
  cadastro: CadastroForm
}
export interface Token{
  token: string  
}
export interface LoginFormState {
  username: string,
  password: string
}
export const loginInitialState: LoginFormState = {
  username: '',
  password: ''
} 
export interface UserContextType {
  state: UserState,
  login: (data: LoginForm) => void
  dispatch: React.Dispatch<UserAction>
  cadastroFake: () => void

  
 
}

export interface LoginForm {
  username: string,
  password: string
}
export interface CadastroForm {
  username: string,
  email: string,
  password: string
}
export const cadastroInitialState = {
  username: '',
  email: '',
  password: ''
}


