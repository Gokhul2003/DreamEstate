import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./user/userSlice";
export const store = configureStore({
    //Serializable checks in Redux are used to serialize state and actions, 
    // but in some cases, such as simplifying the development process or improving performance, this feature can be disabled

  reducer: {userReducer},
  middleware: (getDefualtMiddleware) =>
    getDefualtMiddleware({
      serializableCheck: false,
    }),
});
