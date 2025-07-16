export default async function searchByTag({ params }) {
  const { tag } = await params;

  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();

  const postsok = data.posts.filter((post) => post.tags.includes(tag));

  return (
    <div>
      <p>{postsok.length}</p>
      {postsok.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}
