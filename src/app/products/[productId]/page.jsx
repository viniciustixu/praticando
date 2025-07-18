export default async function ProductDetail({ params }) {
  const { productId } = await params;

  const resolve = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await resolve.json();

  return (
    <main>
      <aside>
        <img src={data.images[0]} alt='Imagem do produto' />
      </aside>

      <aside>
        <section>
          <h1>{data.title}</h1>
          <p>{data.price}</p>
          <p>{data.discountPercentage}</p>
        </section>

        <section>
          <p>{data.warrantyInformation}</p>
          <p>{data.shippingInformation}</p>
          <p>{data.availabilityStatus}</p>
          <p>{data.returnPolicy}</p>
        </section>
      </aside>

      <aside>
        <section>
          <h1>Description:</h1>
          <p>{data.description}</p>
        </section>

        <section>
          <h1>specification</h1>
          <p>{data.brand}</p>
          <p>{data.sku}</p>
          <p>{data.weight}</p>
        </section>

        <section>
          <h1>Dimensions:</h1>
          <p>width: {data.dimensions.width}</p>
          <p>height: {data.dimensions.height}</p>
          <p>depth: {data.dimensions.depth}</p>
        </section>
      </aside>

      <article>
        <h1>Reviews:</h1>
        {data.reviews.map((item) => (
          <section>
            <h2>{item.reviewerName}</h2>
            <h2>{item.reviewerEmail}</h2>
            <h3>{item.date}</h3>
            <h3>{item.rating}</h3>
            <p>{item.comment}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
