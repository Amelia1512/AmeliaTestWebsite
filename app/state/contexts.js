'use client'

import React, { useState } from 'react';

export const CartContext = React.createContext({
    cartItems: [],
    // cartLevelDiscount: decimal,
    // goToCheckout: Boolean,
    // checkoutShown: Boolean,
    addItemToCart: (item) => {},
    // getCartTotal: () => {},
    incrementItem: (id) => {},
    decrementItem: (id) => {}
}) 

export const CartContextProvider = (props) => {
    const addItemToCart = (item) => {
        var currentItems = state.cartItems;
        var itemToFind = currentItems.find((foundItem) => 
            foundItem.id === item.id
        )
        console.log(itemToFind);
        if(itemToFind === undefined) {
            currentItems.push({
                ...item, 
                quantity: 1
            })
        }
        else {
            itemToFind.quantity = itemToFind.quantity + 1;  
        }
        setState({
            ...state, 
            cartItems: currentItems
        })
        console.log(state.cartItems);
    }

    const incrementItem = (id) => {
        var currentItems = state.cartItems;
        var itemToFind = currentItems.find((foundItem) => 
            foundItem.id === id
        )
        itemToFind.quantity = itemToFind.quantity + 1;
        setState({
            ...state, 
            cartItems: currentItems
        })
        console.log(state.cartItems)
    }

    const decrementItem = (id) => {
        var currentItems = state.cartItems;
        var itemToFind = currentItems.find((foundItem) => 
            foundItem.id === id
        )
        itemToFind.quantity = itemToFind.quantity - 1;
        setState({
            ...state, 
            cartItems: currentItems
        })
    }

    const initState = {
        cartItems: [],
        addItemToCart: addItemToCart,
        incrementItem: incrementItem,
        decrementItem: decrementItem
    }
    const [state, setState] = useState(initState);

    return(
        <CartContext.Provider value = {state}>
            {props.children}
        </CartContext.Provider>
    )
}