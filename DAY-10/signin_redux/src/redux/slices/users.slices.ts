import { createSlice } from "@reduxjs/toolkit";
import { SigninFormData, SignupFormData } from '../../models/user.model';
  
interface AuthState {
    user: SignupFormData | null;
    loading: boolean;
    error: string | null;
}
  
const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};
  
let usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    fetchUsersSuccess: (store, action) => {
    console.log("Within handleSignin>>>" + action.payload.result +"::"+ action.payload.user.email +"::"+ action.payload.user.password );
    const users = action.payload.result;
    store.loading = false;
    let foundUser = users.find((user: any) => {
        if (user.email === action.payload.user.email) {
          if (user.password === action.payload.user.password) {
            store.user = user;
            store.error = null;
          } else {
            store.user = null;
            store.error = "wrong password";
            console.log("wrong password");
          }
          return true; // Exit loop
        }
      });
      
      if (!foundUser) {
        console.log("user does not exist");
        store.user = null;
        store.error = "user does not exist";
      }
      return store; // updated store
    },
    fetchUsersFailure:(store, action) =>{
        console.log("fetch failure");
        store.user = null;
        store.loading = false;
        store.error = action.payload;
        return store;
    }
  },
});

export let { fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions;
export default usersSlice.reducer;
