import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/news-reducer";

const logMiddleware = (store: any) => (dispatch: any) => (action: any) => {
  console.log(store.getState());
  return dispatch(action);
};

const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logMiddleware),
});

export default store;
