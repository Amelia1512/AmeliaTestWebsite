'use client'

import './product-card.css';
import Image from 'next/image';

const ProductCard = (props) => {
    const { image, name, price, id } = props;

  return (
    <div className="product-card-container">
        <a className="product-card">
          <dev className="product-card__image-container">
            <Image 
              className="product-card__image" 
              src={image} 
              height={330}
              width={405}
              alt={name}
            />
          </dev>
        <p className="product-card__price">{price}</p>
        <p className="product-card__name">{name}</p>
        <div className='product-button-container'>
          <button className='product-card__button' onClick={() => {console.log(name)}}>Add to cart</button>
        </div>
        </a>

    </div>
  );
}

export default ProductCard;