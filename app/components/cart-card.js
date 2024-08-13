import Image from 'next/image';
import './cart-card.css'
import { useContext } from 'react';
import { CartContext } from '../state/contexts';

const CartCard = (props) => {
    const { itemImage, itemName, itemPrice, id } = props; 
    const context = useContext(CartContext);
    var itemToFind = context.cartItems.find((foundItem) => 
        foundItem.id === id
    )
    itemToFind.quantity = itemToFind.quantity + 1;

    return(
        <div className='cart-card-container'>
              <Image key={itemName}
              className="cart-card__image" 
              src={itemImage} 
              height={165}
              width={202.5}
              alt={itemName}
            />
            <div className="cart-card__name-and-price">
                <p>{itemName}</p>
                <p>{itemPrice}</p>
            </div>
            <div className='cart-card-buttons'>
                <button className='cart-card__minus-button' onClick={() => context.decrementItem(id)}>-</button>
                <div className='button-space'>
                    <p>{itemToFind.quantity}</p>    
                </div>
                <button className='cart-card__add-button' onClick={() => context.incrementItem(id)}>+</button>
            </div>
            
        </div>
    )
}
export default CartCard;