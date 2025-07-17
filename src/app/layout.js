import "./globals.css";
import Link from 'next/link';



export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className='bg-gray-300'>
        <header className='flex justify-between bg-gray-800 text-amber-400 p-3'>
          <div>
            <Link href="/">
              <h1 className='text-4xl font-bold'>Next</h1>
            </Link>
          </div>

          <nav className='flex gap-2 items-center text-[1.3rem]'>
            <Link href="/posts">
              <p className='hover:text-fuchsia-300 hover:cursor-pointer hover:underline hover:underline-offset-12'>Posts</p>
            </Link>
            <Link href="/products">
              <p className='hover:text-fuchsia-300 hover:cursor-pointer hover:underline hover:underline-offset-12'>Products</p>
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html >
  );
}
