'use client'

import React, { useState } from 'react';

export const CartContext = React.createContext({
    cartItems: [],
    // cartLevelDiscount: decimal,
    // goToCheckout: Boolean,
    // checkoutShown: Boolean,
    addItemToCart: (item) => {},
    // getCartTotal: () => {},
}) 

export const CartContextProvider = (props) => {
    const addItemToCart = (item) => {
        var currentItems = state.cartItems
        currentItems.push(item)
        setState({
            ...state, 
            cartItems: currentItems
        })
    }
    const initState = {
        cartItems: [],
        addItemToCart: addItemToCart
    }
    const [state, setState] = useState(initState);

    return(
        <CartContext.Provider value = {state}>
            {props.children}
        </CartContext.Provider>
    )
}