import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    favorites: [], // Add an array for favorites
    statusTab: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        addToFavorite(state, action) {
            const { productId } = action.payload;
            const indexProductId = state.favorites.indexOf(productId);
        
            if (indexProductId >= 0) {
                state.favorites.splice(indexProductId, 1);  
            } else {
                state.favorites.push(productId); 
            }
        
            localStorage.setItem("favorites", JSON.stringify(state.favorites)); 
        }
        
    }
});

export const { addToCart, changeQuantity, addToFavorite } = cartSlice.actions;  
export default cartSlice.reducer;
