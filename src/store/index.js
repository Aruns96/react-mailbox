import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth'
import EmailReducer from './Email'

const store=configureStore({
    reducer:{auth:AuthReducer,email:EmailReducer}
})

export default store;