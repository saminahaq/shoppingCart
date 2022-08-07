import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
//import productReducer from './productSlice';
const store = configureStore({
    reducer: {
        //  from the cartSlice
        cart: cartReducer
        //  from the productSlice
        //product: productReducer,
        // on going reducer add here
    },
});

export default store;