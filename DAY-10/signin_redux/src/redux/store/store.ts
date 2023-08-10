import { configureStore } from "@reduxjs/toolkit";
import users from "../slices/users.slices";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../saga/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({ reducer: { users },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
});
sagaMiddleware.run(rootSaga); // registers the root Saga with Store
export default store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;