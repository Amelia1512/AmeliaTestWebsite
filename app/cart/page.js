'use client'

import { useContext } from "react";
import { CartContext } from "@/app/state/contexts";
import CartCard from "@/app/components/cart-card";



export default function Page() { 
  const context = useContext(CartContext); 
  return (
    <div className="cart-container">
      <div className="cart-container-header">
        <div className="cart-container-in-your-cart">
          <p>In your cart:</p>
        </div>
        <div className="cart-container-subtotal">
          <p>Subtotal: £{context.getCartTotal()}</p>
        </div>
      </div>
      <div className="cart-container-productInfo">
        {context.cartItems.map((cartItem) => {
          return (<CartCard {...cartItem} />)
        })}
      </div>
    </div>
  );
}