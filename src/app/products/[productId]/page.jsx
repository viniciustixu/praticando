export default async function ProductDetail({ params }) {
  const { productId } = await params;

  const resolve = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await resolve.json();

  return (
    <main>
      <div className='flex m-6 border'>
        <aside className='flex w-[900px] '>
          <img
            src={data.images[0]}
            alt='Imagem do produto'
            className='w-full min-w-[500px]'
          />
        </aside>
        <aside className='w-full p-2'>
          <section className=' mb-7'>
            <h1 className='text-8xl font-semibold text-center mb-7'>
              {data.title}
            </h1>
            <div className='flex items-center justify-center'>
              <p className='text-6xl'>Price: {data.price}</p>
              <p className='line-through'>{data.discountPercentage}</p>
            </div>
          </section>

          <section className='flex justify-center'>
            <ul className='flex  list-disc space-x-14 font-extralight'>
              <li>{data.warrantyInformation}</li>
              <li>{data.shippingInformation}</li>
              <li>{data.availabilityStatus}</li>
              <li>{data.returnPolicy}</li>
            </ul>
          </section>
        </aside>
      </div>

      <aside>
        <section>
          <h1 className='text-5xl text-center font-bold'>Description:</h1>
          <p className='text-center mt-4'>{data.description}</p>
        </section>

        <section>
          <h1 className='text-5xl text-center font-bold mt-12'>
            specification
          </h1>
          <div className='text-center mt-4'>
            <p>Brand: {data.brand}</p>
            <p>Sku: {data.sku}</p>
            <p>weight: {data.weight}</p>
          </div>
        </section>

        <section>
          <h1 className='text-5xl text-center font-bold mt-12'>Dimensions:</h1>
          <div className='text-center mt-4'>
            <p>width: {data.dimensions.width}</p>
            <p>height: {data.dimensions.height}</p>
            <p>depth: {data.dimensions.depth}</p>
          </div>
        </section>
      </aside>

      <article>
        <h1 className='text-6xl text-center mt-24 mb-8'>Reviews:</h1>
        {data.reviews.map((item, index) => (
          <section
            key={index}
            className='flex flex-col border gap-3 mb-4 m-4 p-4'>
            <div className='flex gap-3 items-center'>
              <h2 className='text-3xl'>{item.reviewerName}</h2>
              <h3>★ {item.rating}</h3>
            </div>
            <h2 className='font-light'>{`<${item.reviewerEmail}>`}</h2>
            <p className='font-medium'>Comment: {item.comment}</p>
            <h3>{item.date}</h3>
          </section>
        ))}
      </article>
    </main>
  );
}
