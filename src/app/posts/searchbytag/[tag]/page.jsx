import Link from 'next/link';

export default async function searchByTag({ params }) {
  const { tag } = await params;

  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();

  const postsok = data.posts.filter((post) => post.tags.includes(tag));

  return (
    <div>
      <h1 className='text-3xl font-semibold mt-4 my-4 mx-auto min-w-[722px] max-w-[1080px]'>
        Posts: {tag} ({postsok.length})
      </h1>
      {postsok.map((item) => (
        <div key={item.id} className='card-post'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold mb-2 hover:text-fuchsia-300 hover:cursor-pointer pr-5 pb-2'>
              <Link href={`/posts/detail/${item.id}`}>{item.title}</Link>
            </h1>
            <p className='hover:text-fuchsia-300 hover:cursor-pointer px-3 self-baseline'>
              <Link href={`/posts/user/${item.userId}`}>{item.userId}</Link>
            </p>
          </div>

          <p key={item.id} className='font-sans mb-2'>
            {item.body}
          </p>

          <div className='flex justify-between'>
            <div className='flex'>
              <p className='hover:bg-fuchsia-300 rounded-2xl px-3 hover:cursor-default'>
                ♥ {item.reactions.likes}
              </p>
              <p className='hover:bg-fuchsia-300 rounded-2xl px-3 hover:cursor-default'>
                👁 {item.views}
              </p>
            </div>

            <div className='flex gap-2'>
              {item.tags.map((item, index) => (
                <p
                  key={index + 'a'}
                  className='bg-amber-400 px-3 rounded-2xl hover:bg-fuchsia-300 hover:cursor-pointer'>
                  <Link href={`/posts/searchbytag/${item}`}>{item}</Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
