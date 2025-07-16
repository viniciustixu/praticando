export default function loading() {
  return (
    <div
      className='flex items-center justify-center bg-gray-300'
      style={{ height: 'calc(100vh - 4rem)' }}>
      <img src='/loading.svg' alt='loadingIcon' className='w-36 h-36' />
    </div>
  );
}
