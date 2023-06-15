import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home" //rtk方式
import entireReducer from "./entire/index"//普通方式
import detailReducer from "./detail"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  }
})

export default store