import './product-card.css';

const ProductCard = (props) => {
    const { image, name, price } = props;
    console.log(props);
    console.log(name);


  return (
    <div className="product-card-container">
        <a className="product-card">
        <img 
          className="product-card__image" 
          src={image} 
        />
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">{price}</p>
        </a>
    </div>
  );
}

export default ProductCard;