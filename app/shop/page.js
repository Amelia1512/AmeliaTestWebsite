import ProductCard from '@/app/components/product-card';
import { fetchProducts } from '@/app/data/datamethods';

export default function Page() { 
    const products = fetchProducts();
  return (
    <div>
        <div className="product-list">
                {products.map((product) => {
                    return (<ProductCard {...product} />)
                })}
        </div>
    </div>
  );
}