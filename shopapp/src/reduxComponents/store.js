import { configureStore } from "@reduxjs/toolkit";
import allProducts from './reducer/allProducts'
import cartReducer from './reducer/cartReducer'
import subTotalReducer from "./reducer/subTotal";

const store = configureStore({
    reducer : {
        allProducts,
        cartReducer,
        subTotalReducer
    }
}) 

export default store