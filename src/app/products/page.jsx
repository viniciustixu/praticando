import ProductsDiscount from '@/components/ProductsDiscount/page';
import ProductsRating from '@/components/ProductsRating/page';
import ProductsDiscovery from '@/components/ProductsDiscovery/page';

export default async function productsHome() {
  return (
    <main>
      <div className='flex'>
        <ProductsRating />
        <ProductsDiscount />
      </div>
      <div>
        <ProductsDiscovery />
      </div>
    </main>
  );
}
