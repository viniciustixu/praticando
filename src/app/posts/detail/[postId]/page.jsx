import Link from 'next/link';

export default async function postDetail({ params }) {
  const { postId } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const data = await response.json();

  return (
    <div>
      <h1 className='text-3xl font-semibold mt-4 my-4 mx-auto min-w-[722px] max-w-[1080px]'>
        post de: {data.userId}
      </h1>

      <div className='border rounded-2xl p-3 my-4 mx-auto bg-stone-400 min-w-[722px] max-w-[1080px]'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-semibold  pr-5'>{data.title}</h1>
          <p className='hover:text-fuchsia-300 hover:cursor-pointer px-3 content-center'>
            <Link href={`/posts/user/${data.userId}`}>{data.userId}</Link>
          </p>
        </div>

        <p className='font-light font-mono mb-2'>id: {data.id}</p>
        <p className='font-sans mb-2'>{data.body}</p>

        <div className='flex justify-between'>
          <div className='flex'>
            <p className='hover:bg-fuchsia-300 rounded-2xl px-3 hover:cursor-default'>
              ↑ {data.reactions.likes}
            </p>
            <p className='hover:bg-fuchsia-300 rounded-2xl px-3 hover:cursor-default'>
              ↓ {data.reactions.dislikes}
            </p>
            <p className='hover:bg-fuchsia-300 rounded-2xl px-3 hover:cursor-default'>
              👁 {data.views}
            </p>
          </div>

          <div className='flex gap-2'>
            {data.tags.map((item, index) => (
              <p
                key={index + 'a'}
                className='bg-amber-400 px-3 rounded-2xl hover:bg-fuchsia-300 hover:cursor-pointer'>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
