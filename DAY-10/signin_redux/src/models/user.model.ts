
export interface UserCredentials {
  email: string;
  password: string;
}

export interface SigninFormData extends UserCredentials{
  rememberMe: boolean;
}

export interface SignupFormData extends UserCredentials {
  username:string;
  confirmPassword: string;
  signupCondition:boolean;
}