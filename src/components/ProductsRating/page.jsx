export default async function ProductsRating() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  const produtosPorRating = data.products.sort((a, b) => b.rating - a.rating);

  return (
    <aside className='flex flex-wrap max-w-[50vw] max-h-[70vh] bg-stone-400 overflow-y-auto custom-scroll m-2  rounded-[6px] '>
      <h1 className={'w-full text-4xl font-semibold mb-4 p-2 text-center'}>
        Top rating
      </h1>

      {produtosPorRating.map((product) => (
        <div
          key={product.id}
          className='flex flex-col w-[213px] h-[300px] bg-amber-400 m-2 p-2 rounded-2xl hover:bg-fuchsia-300 hover:cursor-pointer'>
          <img
            src={product.images[0]}
            alt='imagem do produto'
            className='max-h-[60%] bg-gray-300 rounded-2xl'
          />

          <h1 className='text-2xl truncate font-semibold mb-[1px]'>
            {product.title}
          </h1>

          <p className='line-clamp-2 leading-5'>{product.description}</p>

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
