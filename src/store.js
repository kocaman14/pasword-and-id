import { configureStore } from "@reduxjs/toolkit";
import  enterReducer  from "./features/entery";
export default configureStore({
    reducer: {
      enter: enterReducer,
    },
  })
  