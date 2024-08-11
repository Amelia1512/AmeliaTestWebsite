import Header from '@/app/components/header';
import ProductCard from '@/app/components/product-card';
import { fetchProducts } from '@/app/data/datamethods';

export default function Page() { 
    const products = fetchProducts();
  return (
    <div>
      <Header title="Shop" />
        <div className="product-list">
                {products.map((product) => {
                    return (<ProductCard {...product} />)
                })}
        </div>
    </div>
  );
}