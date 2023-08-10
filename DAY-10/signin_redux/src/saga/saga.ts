import { call, put, retry, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./sagaactions";
import axios from "axios";
//import { ProductModel } from "../models/product.model";
import {
    fetchUsersSuccess,
    fetchUsersFailure
} from "../redux/slices/users.slices";
import { PayloadAction } from "@reduxjs/toolkit";

type AxiosResponse = {
  data: [];
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
};

function getUsers() {
  return axios.get<[]>("http://localhost:3500/users");
}

function* fetchUsersAsync(action: PayloadAction) {
  try {
    let response: AxiosResponse = yield call(getUsers);
    //   console.log(response.data);
    console.log("fetch users aysn>>>" + action.payload);
   yield put(fetchUsersSuccess({result: response.data, user:action.payload})); // dispatching the action to reducer
  } catch (error) {
    console.log("Failed !");
    yield put(fetchUsersFailure("Error fetching users"));
  }
}

function*  addUserAsync(action: PayloadAction){

  console.log("ADd user async");
  try {
    let response: AxiosResponse = yield call(getUsers);
    //   console.log(response.data);
    console.log("ADd users aysn>>>" + action.payload);
   //yield put(fetchUsersSuccess({result: response.data, user:action.payload})); // dispatching the action to reducer
  } catch (error) {
    console.log("Failed !");
    yield put(fetchUsersFailure("Error fetching users"));
  }


}

export function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_USERS_ASYNC, fetchUsersAsync);
  yield takeLatest(SagaActions.ADD_USER_ASYNC, addUserAsync);
}