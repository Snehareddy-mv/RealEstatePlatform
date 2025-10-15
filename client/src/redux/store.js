import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice.js';

export const store = configureStore({
  reducer: {
    user:userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



//here serialcheck is made false to avoid the error related to non serializable values in redux state, like cookies, dates etc.ex like i wamma store formdata..usually recat considers it as a nonserial and gives error or warning