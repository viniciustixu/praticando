import Link from 'next/link';

export default async function userPosts({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/user/${id}`);
  const data = await response.json();

  return (
    <div>
      <h1 className='text-3xl font-semibold mt-4 my-4 mx-auto min-w-[722px] max-w-[1080px]'>
        User {id}: {data.total} post(s)
      </h1>

      {data.posts.map((item, index) => (
        <div key={index} className='card-post'>
          <div>
            <h1 className='text-3xl font-semibold mb-2  pr-5 pb-2 hover:text-fuchsia-300 hover:cursor-pointer'>
              <Link href={`/posts/detail/${item.id}`}>{item.title}</Link>
            </h1>
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
