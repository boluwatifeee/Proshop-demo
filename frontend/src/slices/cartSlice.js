import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/ cartUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // reducer function takes in 2 things: state and action(action: payload data, state: current state)
        addToCart: (state, action) => {
            const item = action.payload;

            // Check if item is already in the cart
            const existItem = state.cartItems.find((x) => x._id === item._id);

            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)
            } else {
                // State is immutable,cannot use .push
                state.cartItems = [...state.cartItems, item];
            }

            return updateCart(state);
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

            return updateCart(state);
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;