'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductsHome() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    productName: '',
    priceMax: 1000,
    discountMin: 0,
  });

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(filters.productName.toLowerCase()) &&
      product.price <= filters.priceMax &&
      product.discountPercentage >= filters.discountMin
    );
  });

  return (
    <div className='flex'>
      <div className='flex flex-col  gap-4 p-4 min-w-lg fixed '>
        <input
          type='text'
          placeholder='Product name'
          value={filters.productName}
          onChange={(e) =>
            setFilters({ ...filters, productName: e.target.value })
          }
          className='input input-info w-full'
        />

        <label>Max price: $ {filters.priceMax}</label>
        <input
          type='range'
          className='range range-info w-full'
          min={0}
          max={1000}
          step={10}
          value={filters.priceMax}
          onChange={(e) =>
            setFilters({ ...filters, priceMax: Number(e.target.value) })
          }
        />

        <label>Min discount: {filters.discountMin}%</label>
        <input
          type='range'
          className='range range-info w-full'
          min={0}
          max={100}
          step={1}
          value={filters.discountMin}
          onChange={(e) =>
            setFilters({ ...filters, discountMin: Number(e.target.value) })
          }
        />
        <hr />
      </div>

      <div className=' ml-128'>
        <div className='flex gap-2 flex-wrap justify-center m-2'>
          {filteredProducts.map((item, index) => (
            <div className='card bg-base-100 w-96 shadow-sm' key={item.index}>
              <figure>
                <img src={item.images[0]} alt='Product image' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{item.title}</h2>
                <p>{item.description}</p>
                <div className='flex justify-between'>
                  <div className='flex gap-1'>
                    <h1 className='font-semibold text-2xl'>{item.price}</h1>
                    <h2 className='line-through'>{item.discountPercentage}%</h2>
                  </div>
                  <div className='card-actions justify-end'>
                    <Link href={`/products/${item.id}`}>
                      <button className='btn btn-primary'>Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
