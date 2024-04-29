import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
//Serializable checks in Redux are used to serialize state and actions,
// but in some cases, such as simplifying the development process or improving performance, this feature can be disabled

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
