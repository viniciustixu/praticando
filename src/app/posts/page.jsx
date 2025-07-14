export default async function posts() {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();

  return (
    <>
      {data.posts.map((item) => (
        <div className='border rounded-2xl p-3 my-4 mx-75 bg-stone-400'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-semibold mb-2 hover:text-fuchsia-300 hover:cursor-pointer pr-5 pb-2'>
              {item.title}
            </h1>
            <p className='hover:text-fuchsia-300 hover:cursor-pointer px-3 self-baseline'>
              {item.userId}
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
              {item.tags.map((item) => (
                <p className='bg-amber-400 px-3 rounded-2xl hover:bg-fuchsia-300 hover:cursor-pointer'>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
