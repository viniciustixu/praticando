export default async function ProductsDiscount() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return (
    <aside className='flex flex-nowrap max-w-full h-[19vh] bg-stone-400 overflow-x-auto scroll-hidden rounded-[6px] box-border m-2'>
      {data.products.map((product) => (
        <div
          key={product.id}
          className='flex flex-col w-[180px] max-h-[100%] bg-amber-400 m-2 p-2 rounded-2xl hover:bg-fuchsia-300 hover:cursor-pointer'>
          <img
            src={product.images[0]}
            alt='imagem do produto'
            className='max-h-[60%] bg-gray-300 rounded-2xl'
          />

          <h1 className='text-2xl truncate font-semibold '>{product.title}</h1>

          <div className='flex justify-end gap-2'>
            <p className='font-semibold text-3xl'>${product.price}</p>
            <span className='font-light line-through text-[0.9rem]'>
              -{product.discountPercentage}%
            </span>
          </div>
        </div>
      ))}
    </aside>
  );
}
