'use client'

import { useContext } from 'react';
import './product-card.css';
import Image from 'next/image';
import { CartContext } from '../state/contexts';

const ProductCard = (props) => {
    const { image, name, price, id } = props;
    const context = useContext(CartContext);

  return (
    <div className="product-card-container">
        <a className="product-card">
          <div className="product-card__image-container">
            <Image 
              className="product-card__image" 
              src={image} 
              height={330}
              width={405}
              alt={name}
            />
          </div>
        <p className="product-card__price">{price}</p>
        <p className="product-card__name">{name}</p>
        <div className='product-button-container'>
          <button className='product-card__button' onClick={() => context.addItemToCart({
            id: id,
            itemPrice: price,
            itemName: name,
            itemImage: image
          })}>Add to cart</button>
        </div>
        </a>

    </div>
  );
}

export default ProductCard;