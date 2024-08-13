import Image from 'next/image';

const CartCard = (props) => {
    const { itemImage, itemName, itemPrice, id } = props; 
    return(
        <div className='cart-card-container'>
              <Image 
              className="product-card__image" 
              src={itemImage} 
              height={165}
              width={202.5}
              alt={itemName}
            />
        <p className="cart-card__name">{itemName}</p>
        <p className="cart-card__price">{itemPrice}</p>
        </div>
    )
}
export default CartCard;